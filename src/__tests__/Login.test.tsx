import { render, screen } from "@testing-library/react";
import Login from "../routes/Login";

test("displays login text", () => {
  render(<Login />);

  const loginText = screen.getByRole("heading", {
    level: 3,
    name: /login to your account/i,
  });
  expect(loginText).toBeInTheDocument();
});

test("displays google signIn button", () => {
  render(<Login />);
  const googleSignBtn = screen.getByRole("button", {
    name: /login with google/i,
  });
  expect(googleSignBtn).toBeInTheDocument();
});

test("renders email input", () => {
  render(<Login />);

  const inputEl = screen.getByTestId("email-input");
  expect(inputEl).toBeInTheDocument();
  expect(inputEl).toHaveAttribute("type", "email");
});
