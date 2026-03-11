import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome text", () => {
  render(<App />);
  const text = screen.getByRole("heading", { name: /ci\/cd pipeline verification screen/i });
  expect(text).toBeInTheDocument();
});