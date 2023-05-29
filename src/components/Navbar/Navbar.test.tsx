import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import GlobalStyle from "../../styles/GlobalStyles/GlobalStyles";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When its rendered", () => {
    test("Then it should show the navigation link 'Home'", () => {
      const routes = [
        {
          path: "/",
          element: <Navbar />,
        },
      ];

      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const NavLinkHome = screen.getByRole("link", {
        name: "Home",
      });

      expect(NavLinkHome).toBeInTheDocument();
    });
  });
});
