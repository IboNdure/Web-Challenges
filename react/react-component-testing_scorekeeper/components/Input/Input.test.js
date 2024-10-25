import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      label="Username"
      name="username"
      placeholder="Enter username"
      value=""
      onChange={() => {}}
      required
    />
  );

  const label = screen.getByText("Username");
  expect(label).toBeInTheDocument();

  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("name", "usernamer");
  expect(input).toHaveAttribute("placeholder", "Enter username");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  const HandleChange = jest.fn();

  render(
    <Input
      labelText="Username"
      name="username"
      placeholder="Enter username"
      value=""
      onChange={HandleChange}
      required
    />
  );

  const input = screen.getByRole("textbox");

  await userEvent.type(input, "test");

  expect(HandleChange).toHaveBeenCalledTimes(4);
});
