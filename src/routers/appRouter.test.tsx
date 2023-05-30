import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "../store";
import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";

describe("Given a appRouter router", () => {
  describe("When it redirects to LoginPage", () => {
    test("It should render the text 'Sign in' inside a heading", () => {
      const headingText = "Sign in";

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={appRouter} />
          </Provider>
        </ThemeProvider>
      );

      const text = screen.getByRole("heading", { name: headingText });

      expect(text).toBeInTheDocument();
    });
  });
});
