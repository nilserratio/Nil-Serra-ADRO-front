import { screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import renderWithProviders from "../../utils/testUtils";

describe("Given a LoginForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show two labels with a placeholder text 'Username' and 'Password'", () => {
      const usernameText = "Username";
      const passwordText = "Password";

      renderWithProviders(<LoginForm />);

      const usernameLabelText = screen.getByLabelText(usernameText);
      const passwordLabelText = screen.getByLabelText(passwordText);

      expect(usernameLabelText).toBeInTheDocument();
      expect(passwordLabelText).toBeInTheDocument();
    });
  });

  test("Then it should show a button with the test 'Sign in'", () => {
    const signInText = "Sign in";

    renderWithProviders(<LoginForm />);

    const signInButton = screen.getByRole("button", { name: signInText });

    expect(signInButton).toBeInTheDocument();
  });
});
