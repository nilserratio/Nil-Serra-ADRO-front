import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button with the text 'test button'", () => {
      const text = "test Button";

      renderWithProviders(<Button text={text} />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show the button enabled", () => {
      const isDisable = false;

      renderWithProviders(<Button isDisable={isDisable} />);

      const button = screen.getByRole("button");

      expect(button).toBeEnabled();
    });
  });
});
