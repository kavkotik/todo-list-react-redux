import React from "react";
import { delTodo, toggleTodoCompleted } from "../store/todoSlice";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo, editTask, isEditing, newTask }) => {
  const dispatch = useDispatch();

  return (
    <li
      className={
        isEditing
          ? newTask.id === todo.id
            ? " todo-item todo-item-editing"
            : "todo-item"
          : "todo-item"
      }
    >
      <div className="task-details">
        <div className="task-status">
          <Form.Check
            aria-label="option 1"
            checked={todo.done}
            onChange={() => dispatch(toggleTodoCompleted({ id: todo.id }))}
          />
        </div>
        <div className="task-text">
          <h3
            className="task-title"
            onClick={() => dispatch(toggleTodoCompleted({ id: todo.id }))}
          >
            {todo.title}
          </h3>
          <p className="task-description">{todo.description}</p>
        </div>
      </div>
      <div className="task-options">
        <img
          src="icons/edit.png"
          alt="edit"
          className="edit-task icon"
          onClick={() => editTask(todo)}
        />
        <img
          src="icons/delete.png"
          alt="del"
          className="delete-task icon"
          onClick={() => dispatch(delTodo({ id: todo.id }))}
        />
      </div>
    </li>
  );
};

export default TodoItem;
