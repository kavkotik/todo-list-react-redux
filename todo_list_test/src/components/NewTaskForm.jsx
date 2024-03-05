import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import ToggleStatusGroup from "./ToggleStatusGroup";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/todoSlice";

function NewTaskForm({
  newTask,
  setNewTask,
  initialState,
  isEditing,
  setIsEditing,
}) {
  const [validationError, setValidationError] = useState("");

  const dispatch = useDispatch();

  const addNewTask = () => {
    if (newTask.title.trim() !== "" && newTask.title.trim().length <= 100) {
      dispatch(addTodo({ newTask }));
      setNewTask(initialState);
      setValidationError("");
    } else {
      setValidationError(
        "The number of title characters must be between 1 and 100"
      );
    }
  };

  const saveEditedTask = () => {
    if (newTask.title.trim() !== "" && newTask.title.trim().length <= 100) {
      dispatch(editTodo({ newTask }));
      setNewTask(initialState);
      setValidationError("");
      setIsEditing(false);
    } else {
      setValidationError(
        "The number of title characters must be between 1 and 100"
      );
    }
  };

  return (
    <div className="new-task-form">
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Title"
          value={newTask.title}
          onInput={(e) =>
            setNewTask((prev) => (prev = { ...prev, title: e.target.value }))
          }
        />
      </InputGroup>

      <InputGroup>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          placeholder="Description"
          value={newTask.description}
          onInput={(e) =>
            setNewTask(
              (prev) => (prev = { ...prev, description: e.target.value })
            )
          }
        />
      </InputGroup>
      <div className="status-block">
        {validationError && <p className="error-text">{validationError}</p>}
        <ToggleStatusGroup setNewTask={setNewTask} newTask={newTask} />
      </div>

      <Button
        variant="outline-dark"
        onClick={() => {
          isEditing ? saveEditedTask() : addNewTask();
        }}
      >
        {isEditing ? "Save!" : "Add!"}
      </Button>
    </div>
  );
}

export default NewTaskForm;
