import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import Layout from "./Layout";
import { vi } from "vitest";

afterEach(() => {
  vi.clearAllMocks();
});

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Image with the alternative text 'Adro Osona logo with a dog footprint'", () => {
      const expectedAlternativeText = "Adro Osona logo with a dog footprint";

      renderWithProviders(wrapWithRouter(<Layout />));

      const text = screen.getByRole("img", { name: expectedAlternativeText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's rendered but it's taking time to load the page", () => {
    test("Then it should show a Loader component", () => {
      const labelText = "loading";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { isLoading: true },
      });

      const loader = screen.getByLabelText(labelText);

      expect(loader).toBeInTheDocument();
    });
  });

  describe("When it's rendered but there is an error loading the home page", () => {
    test("Then it should show a Feedback component", () => {
      const labelText = "feedback modal";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { showFeedback: true },
      });

      const feedbackModal = screen.getByLabelText(labelText);

      expect(feedbackModal).toBeInTheDocument();
    });

    test("Then it should show a Feedback component with a Button with the text 'Acccpet'", () => {
      const buttonText = "Accept";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          showFeedback: true,
          isError: true,
          isLoading: false,
        },
      });

      const buttonModal = screen.getByRole("button", { name: buttonText });

      expect(buttonModal).toBeInTheDocument();
    });
  });
});
