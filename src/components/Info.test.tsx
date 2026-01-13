import React from "react";
import { render, screen } from "@testing-library/react";
import Info from "./Info";

test("Info page renders Wedding Info heading", () => {
  render(<Info />);

  expect(screen.getByText(/Wedding Info/i)).toBeInTheDocument();
  expect(screen.getByText(/Ceremony/i)).toBeInTheDocument();
});
