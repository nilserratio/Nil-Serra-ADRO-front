import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it's rendered", () => {
    test("Then is should show a 'RaceBy' loader", () => {
      const text = "loading";

      renderWithProviders(<Loader />);

      const loader = screen.getByLabelText(text);

      expect(loader).toBeInTheDocument();
    });
  });
});
