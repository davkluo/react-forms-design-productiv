import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import TodoApp from "./TodoApp";


const DEFAULT_TESTING_TODOS = [
  {
    id: 1,
    title: "Test1 Title!",
    description: "Test1 Description",
    priority: 1,
  },
  {
    id: 2,
    title: "Test2 Title!",
    description: "Test2 Description",
    priority: 2,
  },
  {
    id: 3,
    title: "Test3 Title!",
    description: "Test3 Description",
    priority: 3,
  },
];


describe("productiv app", function () {
  it("renders without crashing", function () { // smoke test
    render(<App />);
  });

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

// test TodoApp
describe("Testing TodoApp", function () {
  test("renders without crashing", function () { // smoke test
    render(<TodoApp />);
  });
  //  test html component for editable todolist.
  test('should show EditiableTodoList', () => {
    render(<TodoApp initialTodos={DEFAULT_TESTING_TODOS}/>);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
   })

  //  test TopTodo is showing
  //  test Add Nu is showing

  // test EditableTodoList
    //  test 3 todos showing
    // test edit button click shows edit form
    // test update after edit button clicked
    // test save after edit button clicked
    // test delete button clicked

    // test that top Todo shows highestpriority
    // test that TopTodo shows correct priority after list is altered.

    // test after all deleted that list doesnt show
    // test after all deleted that TopTodo doesnt show

    // test Add Nu adds a new todo

})






