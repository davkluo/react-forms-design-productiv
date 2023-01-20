import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from './TodoForm';

const DEFAULT_INITIAL_TODOS = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos=DEFAULT_INITIAL_TODOS }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const todo = { ...newTodo, id: uuid() };
    setTodos(todos => [ ...todos, todo ]);
  }

  /** update a todo with updatedTodo */
  function update(id, updatedTodo) {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id
          ? { ...updatedTodo, id }
          : todo
      )
    );
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos =>
      todos.filter(todo => todo.id !== id)
    );
  }

  const todosIsEmpty = todos.length === 0;

  return (
      <main className="TodoApp">
        <div className="row">

          <div className="col-md-6">
            { !todosIsEmpty &&
              <EditableTodoList />
            }
            { todosIsEmpty &&
              <span className="text-muted">You have no todos.</span>
            }
          </div>

          <div className="col-md-6">
            { !todosIsEmpty &&
              <section className="mb-4">
                <h3>Top Todo</h3>
                <TopTodo />
              </section>
            }

            <section>
              <h3 className="mb-3">Add Nü</h3>
              <TodoForm handleSave={create}/>
            </section>
          </div>

        </div>
      </main>
  );
}

export default TodoApp;