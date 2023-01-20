import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DEFAULT_TESTING_TODOS } from './_TestCommons';
import Todo from "./Todo";

describe("testing Todo Component", function() {
  test("todo smoketest", function () {
    render(<Todo todo={DEFAULT_TESTING_TODOS[0]} />);
  })
  test("todo showing correct with input", function () {
    render(<Todo todo={DEFAULT_TESTING_TODOS[0]} />);
    expect(screen.queryByText(/Test1 Title/)).toBeInTheDocument()
  })
})
