import { render, screen } from "@testing-library/react";
import App from "./App";

describe('TEST APP', () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);
    expect(btn).toBeInTheDocument();
    // expect(input).toBeInTheDocument();
    expect(helloElement).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    screen.debug();
  });
  test("renders learn react link", async() => {
    render(<App />);
    // const helloElement = screen.queryByText(/hello2/i);
    // expect(helloElement).toBeNull();
    const helloElement = await screen.findByText(/data/i);
    expect(helloElement).toBeInTheDocument();
  });
});
