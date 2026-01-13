import React from "react";
import { render, screen } from "@testing-library/react";
import OurStory from "../components/OurStory";

test("OurStory renders title and story text", () => {
  render(<OurStory />);

  expect(screen.getByRole("heading", { name: /Our Love Story/i })).toBeInTheDocument();
  expect(screen.getByText(/Leah and Joel first met/i)).toBeInTheDocument();
});
