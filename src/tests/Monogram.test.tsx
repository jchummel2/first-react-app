import React from "react";
import { render, screen } from "@testing-library/react";
import Monogram from "../components/Monogram";

test("Monogram renders default initials and date", () => {
  render(<Monogram />);

  expect(screen.getByText(/L & J/)).toBeInTheDocument();
  expect(screen.getByText(/10.24.2026/)).toBeInTheDocument();
});

test("Monogram renders custom initials and date", () => {
  render(<Monogram initials="A & B" date="01.01.2030" />);

  expect(screen.getByText(/A & B/)).toBeInTheDocument();
  expect(screen.getByText(/01.01.2030/)).toBeInTheDocument();
});
