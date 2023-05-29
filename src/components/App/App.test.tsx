import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import GlobalStyle from "../../styles/GlobalStyles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import appRouter from "../../routers/appRouter";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'ADRO Osona", () => {
      const expectedText = /ADRO Osona/i;

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
        </ThemeProvider>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
