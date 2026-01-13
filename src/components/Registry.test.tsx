import React from "react";
import { render, screen } from "@testing-library/react";
import Registry from "./Registry";

test("Registry page renders heading and store links", () => {
  render(<Registry />);

  expect(screen.getByText(/Registry/i)).toBeInTheDocument();
  expect(screen.getByText(/Amazon/i)).toBeInTheDocument();
});
