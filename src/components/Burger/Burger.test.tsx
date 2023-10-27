import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import Burger from "./Burger";

describe("Given a Burger component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the Burguer button", () => {
      renderWithProviders(<Burger className="" />);

      const button = screen.getByRole("button");

      expect(button).toBeInTheDocument();
    });
  });
});
