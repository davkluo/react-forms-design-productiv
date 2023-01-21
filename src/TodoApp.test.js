import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
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

  test('should add new todo', function() {
    render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS} />);

    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const submitBtn = screen.getByText('Gø!');

    fireEvent.change(titleInput, { target: { value: 'eat ice cream' } });
    fireEvent.change(descriptionInput, { target: { value: 'do it now' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText('eat ice cream')).toBeInTheDocument();
  })

  test('should add new todo and update toptodo', function() {
    const altTestingTodos = JSON.parse(JSON.stringify(DEFAULT_TESTING_TODOS));
    altTestingTodos.shift();

    render(<TodoApp initialTodos={altTestingTodos} />);

    expect(screen.queryByText('Test1 Title!')).not.toBeInTheDocument();

    const topTodoContainer = screen.getByText('Top Todo').parentElement;
    expect(within(topTodoContainer).getByText('Test2 Title!')).toBeInTheDocument();

    const titleInput = screen.getByPlaceholderText('Title');
    const descriptionInput = screen.getByPlaceholderText('Description');
    const submitBtn = screen.getByText('Gø!');

    fireEvent.change(titleInput, { target: { value: 'eat ice cream' } });
    fireEvent.change(descriptionInput, { target: { value: 'do it now' } });
    fireEvent.click(submitBtn);

    expect(within(topTodoContainer).getByText('eat ice cream')).toBeInTheDocument();
    expect(within(topTodoContainer).queryByText('Test2 Title!')).not.toBeInTheDocument();
  })

  test('should delete a todo', function() {
    render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS} />);

    const todoList = screen.getByText('Todo List').parentElement;
    const editableTodo = within(todoList)
      .getByText('Test1 Title!')
      .parentElement
      .parentElement
      .parentElement;
    const deleteBtn = within(editableTodo).getByText('Del');

    fireEvent.click(deleteBtn);

    expect(screen.queryByText('Test1 Title!')).not.toBeInTheDocument();
  })

  test('should edit a todo', function() {
    render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS} />);

    const todoList = screen.getByText('Todo List').parentElement;
    const editableTodo = within(todoList)
      .getByText('Test1 Title!')
      .parentElement
      .parentElement
      .parentElement
      .parentElement;
    const editBtn = within(editableTodo).getByText('Edit');

    fireEvent.click(editBtn);

    const titleInput = within(editableTodo).getByPlaceholderText('Title');
    const descriptionInput = within(editableTodo).getByPlaceholderText('Description');
    const submitBtn = within(editableTodo).getByText('Gø!');

    fireEvent.change(titleInput, { target: { value: 'eat ice cream' } });
    fireEvent.change(descriptionInput, { target: { value: 'do it now' } });
    fireEvent.click(submitBtn);

    expect(within(todoList).getByText('eat ice cream')).toBeInTheDocument();
  })


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
