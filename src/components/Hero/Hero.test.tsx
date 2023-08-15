import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils/testUtils";
import Hero from "./Hero";

describe("Given a Hero component", () => {
  describe("When it's rendered ", () => {
    test("Then it should render an image with with the alt text 'A galgo dog looking up'", () => {
      const altText = "A galgo dog looking up";

      renderWithProviders(<Hero />);

      const heroImage = screen.getByAltText(altText);

      expect(heroImage).toBeInTheDocument();
    });
  });

  test("Then it should render the text 'Adopt, save a life' inside a heading", () => {
    const hedingText = "Adopt, save a life";

    renderWithProviders(<Hero />);

    const heroHeading = screen.getByRole("heading", { name: hedingText });

    expect(heroHeading).toBeInTheDocument();
  });
});
