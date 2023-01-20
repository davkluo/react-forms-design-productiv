import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EditableTodoList from './EditableTodoList';
import { DEFAULT_TESTING_TODOS } from './_TestCommons';

describe('EditableTodoList component', function() {
  test('should display the right number of todos', function() {
    render(<EditableTodoList todos={DEFAULT_TESTING_TODOS} />);
    // expect(screen.getthetodos.length).toEqual(3);
  })
})