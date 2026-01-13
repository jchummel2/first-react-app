import React from "react";
import { render, screen } from "@testing-library/react";
import Registry from "../components/Registry";

test("Registry page renders heading and store links", () => {
  render(<Registry />);

  expect(screen.getByRole("heading", { name: /Registry/i })).toBeInTheDocument();
  expect(screen.getByText(/Amazon/i)).toBeInTheDocument();
});
