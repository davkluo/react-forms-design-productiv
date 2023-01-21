import React from "react";
import { render, screen } from "@testing-library/react";
import { DEFAULT_TESTING_TODOS } from './_TestCommons';
import TopTodo from "./TopTodo";

describe("testing Todo Component", function() {
  test("toptodo smoketest", function () {
    render(<TopTodo todos={DEFAULT_TESTING_TODOS} />);
  })

  test("toptodo showing correct with input", function () {
    render(<TopTodo todos={DEFAULT_TESTING_TODOS} />);
    expect(screen.queryByText(/Test1 Title/)).toBeInTheDocument()
  })

  test("toptodo works with priorities that are not one", function () {
    const copyTestTodos = JSON.parse(JSON.stringify(DEFAULT_TESTING_TODOS));
    copyTestTodos.shift();

    render(<TopTodo todos={copyTestTodos} />);
    expect(screen.queryByText(/Test2 Title/)).toBeInTheDocument()
  })
})
