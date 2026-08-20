import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders TeamFlow Manager marketing heading", () => {
  render(<App />);
  expect(screen.getAllByText(/TeamFlow Manager/i).length).toBeGreaterThan(0);
});
