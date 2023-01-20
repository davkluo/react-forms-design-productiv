import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () { // smoke test
    render(<App />);
  });

  it("matches snapshot", function() {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  })

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  // test footer is showing.

  /* it ("rendered quotes app", function () {
    const result = render(<App />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  }); */
});