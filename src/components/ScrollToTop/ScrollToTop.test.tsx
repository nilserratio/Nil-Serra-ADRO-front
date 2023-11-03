import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import ScrollToTop from "./ScrollToTop";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Given a ScrollToTop component", () => {
  const alternativeText = "scroll to top button";

  describe("When the page is the top", () => {
    test("Then the 'go back to top' button it doesn't have to be visible", async () => {
      renderWithProviders(<ScrollToTop />);

      const scrollToTopButton = screen.getByLabelText(alternativeText);

      expect(scrollToTopButton).not.toBeVisible();
    });
  });

  describe("When a page it's scrolled more than 1500 pixels", () => {
    test("Then it should show a 'go back to top' button as a up arrow", async () => {
      renderWithProviders(<ScrollToTop />);

      const scrollToTopButton = screen.getByLabelText(alternativeText);

      expect(scrollToTopButton).toBeInTheDocument();
    });
  });

  describe("When a page it's scrolled more than 1500 pixels and the user click the 'go back to top' button", () => {
    window.scrollTo = vi.fn().mockImplementation(() => ({
      top: 0,
      behavior: "smooth",
    }));

    test("Then it should go back to the top of the page", async () => {
      renderWithProviders(<ScrollToTop />);

      const scrollToTopButton = screen.getByLabelText(alternativeText);

      await userEvent.click(scrollToTopButton);

      waitFor(() => {
        expect(scrollToTopButton).toHaveBeenCalled();
      });
    });
  });
});
