import React from "react";
import { render, screen } from "@testing-library/react";
import EditableTodoList from './EditableTodoList';
import { DEFAULT_TESTING_TODOS } from './_TestCommons';

describe('EditableTodoList component', function() {
  test('should display the right number of todos', function() {
    render(<EditableTodoList todos={DEFAULT_TESTING_TODOS} />);
    // expect(screen.getthetodos.length).toEqual(3);
    expect(screen.queryByText(/Test1 Title!/)).toBeInTheDocument()
    expect(screen.queryByText(/Test2 Title!/)).toBeInTheDocument()
    expect(screen.queryByText(/Test3 Title!/)).toBeInTheDocument()
  })
})