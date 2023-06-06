import { screen } from "@testing-library/react";
import {
  renderWithProviders,
  wrapWithRouter,
} from "../../utils/testUtils/testUtils";
import Layout from "./Layout";
import { isLoadingMock, showFeedbackMock } from "../../mocks/ui/uiMocks";
import Feedback from "../UI/Feedback/Feedback";

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

      renderWithProviders(wrapWithRouter(<Layout />), { ui: isLoadingMock });

      const loader = screen.getByLabelText(labelText);

      expect(loader).toBeInTheDocument();
    });
  });

  describe("When it's rendered but there is an error loading the home page", () => {
    test("Then it should show a Feedback component", () => {
      const labelText = "feedback modal";

      renderWithProviders(wrapWithRouter(<Feedback />), {
        ui: showFeedbackMock,
      });

      const feedbackModal = screen.getByLabelText(labelText);

      expect(feedbackModal).toBeInTheDocument();
    });
  });
});
