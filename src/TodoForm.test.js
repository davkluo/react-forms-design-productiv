import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DEFAULT_TESTING_TODOS } from './_TestCommons';
import TodoForm from "./TodoForm";

const TEST_FORM_STATE = {
  title: 'TITLE1',
  description: 'DESCRIPTION1',
  priority: 2
};

describe("TodoForm tests", function () {
  test("smoke test", function () {
    render(<TodoForm initialFormData={TEST_FORM_STATE}/>);
  })

  test("population of data", function () {
    render(<TodoForm initialFormData={TEST_FORM_STATE}/>);
    expect(screen.getByPlaceholderText("Title").getAttribute("value")).toEqual("TITLE1")
  })

})