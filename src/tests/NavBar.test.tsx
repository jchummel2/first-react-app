import React from "react";
import { render, screen } from "@testing-library/react";

// Mock react-router-dom before importing NavBar so tests don't require the actual package
jest.mock("react-router-dom", () => ({
  NavLink: ({ children, to, className }: any) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
}));

import NavBar from "../components/NavBar";

test("NavBar renders name and navigation links", () => {
  render(<NavBar />);

  expect(screen.getByRole("heading", { name: /LEAH & JOEL/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Our Story/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Info/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Registry/i })).toBeInTheDocument();
});
