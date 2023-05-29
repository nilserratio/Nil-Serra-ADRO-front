import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles/GlobalStyles";
import theme from "../../styles/theme/theme";
import { RouterProvider } from "react-router-dom";
import appRouter from "../../routers/appRouter";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a picture with an alternative text that says 'Adro Osona logo'", () => {
      const expectedAlternativeText = "Adro Osona logo";

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      );

      const image = screen.getByRole("img", { name: expectedAlternativeText });

      expect(image).toBeInTheDocument();
    });
  });
});
