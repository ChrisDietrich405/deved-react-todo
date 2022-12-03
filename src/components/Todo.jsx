import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { GrFormTrash } from "react-icons/gr";

const Todo = ({ todo, todos, setTodos }) => {
  const deleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const completedTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo">
      <li
        className="todo-item"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.todo}
      </li>
      <button onClick={() => completedTodo(todo.id)} className="complete-btn">
        <AiFillCheckCircle />
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="trash-btn">
        <GrFormTrash />
      </button>
    </div>
  );
};

export default Todo;
