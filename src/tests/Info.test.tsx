import React from "react";
import { render, screen } from "@testing-library/react";
import Info from "../components/Info";

test("Info page renders Wedding Info heading", () => {
  render(<Info />);

  expect(screen.getByRole("heading", { name: /Wedding Info/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Ceremony/i })).toBeInTheDocument();
});
