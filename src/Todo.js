import React from "react";

const DEFAULT_SAMPLE_TODO = {
  id: 9000,
  title: 'Title',
  description: 'Description.',
  priority: 1
};

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo=DEFAULT_SAMPLE_TODO }) {
  return (
      <div className="Todo">
        <div>
          <b>{todo.title}</b> <small>(priority: {todo.priority})</small>
          </div>
        <div>
          <small>{todo.description}</small>
          </div>
      </div>
  );
}

export default Todo;