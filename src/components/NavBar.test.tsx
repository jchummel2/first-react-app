import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

test("NavBar renders name and navigation links", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  expect(screen.getByText(/LEAH & JOEL/i)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Our Story/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Info/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Registry/i })).toBeInTheDocument();
});
