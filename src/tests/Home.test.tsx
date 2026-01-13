import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("Home renders wedding date and monogram", () => {
  render(<Home />);

  expect(screen.getByRole("heading", { name: /WEDDING DAY/i })).toBeInTheDocument();
  expect(screen.getByText(/10.24.2026/)).toBeInTheDocument();
});
