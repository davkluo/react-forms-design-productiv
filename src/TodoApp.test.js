import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { DEFAULT_TESTING_TODOS } from './_TestCommons';

describe("Testing TodoApp", function () {
  test("renders without crashing", function () {
    render(<TodoApp />);
  });

  //  test html component for editable todolist.
  test('should show EditiableTodoList', function () {
    render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS} />);
    expect(screen.queryByText("Todo List")).toBeInTheDocument();
  });

  test('should not show EditableTodoList if no todos', function() {
    render(<TodoApp initialTodos={[]} />);
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
  })

  //  test TopTodo is showing
  test('should show TopTodo', function () {
    render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS} />);
    expect(screen.queryByText('Top Todo')).toBeInTheDocument();
  })

  test('should not show TopTodo if no todos', function () {
    render(<TodoApp initialTodos={[]} />);
    expect(screen.queryByText('Top Todo')).not.toBeInTheDocument();
  })

  //  test Add Nu is showing
  test('should show Add Nu form', function() {
    render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS} />);
    expect(screen.queryByText('Add Nü')).toBeInTheDocument();
  })

  // // test that top Todo shows highestpriority
  // test('should show correct highest priority', function() {
  //   render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS} />);
  //   expect(screen.queryAllByText('Test1 Title!').length).toEqual(2);
  // })

  // test Add Nu adds a new todo

  // should be able to delete something
  //should be able to edit something

  // test EditableTodoList
  //  test 3 todos showing
  // test edit button click shows edit form
  // test update after edit button clicked
  // test save after edit button clicked
  // test delete button clicked

  // test that TopTodo shows correct priority after list is altered.

  // test after all deleted that list doesnt show
  // test after all deleted that TopTodo doesnt show
});
