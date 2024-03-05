import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, CloseButton } from "react-bootstrap";
import NewTaskForm from "./components/NewTaskForm";
import ToggleFilterGroup from "./components/ToggleFilterGroup";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const todos = useSelector((state) => state.todos.todos);

  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const initialState = {
    title: "",
    description: "",
    done: false,
  };
  const [newTask, setNewTask] = useState(initialState);
  const [isEditing, setIsEditing] = useState(false);
  const [filtered, setFiltered] = useState(todos);
  const [filter, setFilter] = useState("all");
  const [counter, setCounter] = useState({ done: 0, inProgress: 0 });

  useEffect(() => {
    switch (filter) {
      case "all":
        setFiltered(todos);
        break;
      case "done":
        setFiltered(todos.filter((todo) => todo.done));
        break;
      case "in-progress":
        setFiltered(todos.filter((todo) => !todo.done));
        break;
      default:
        setFiltered(todos);
    }
    setCounter({
      done: todos.filter((todo) => todo.done).length,
      inProgress: todos.filter((todo) => !todo.done).length,
    });
  }, [filter, todos]);

  const editTask = (todo) => {
    setIsEditing(true);
    setIsTaskFormOpen(true);
    setNewTask({
      title: todo.title,
      description: todo.description,
      done: todo.done,
      id: todo.id,
    });
  };

  return (
    <div className="App">
      <header>
        <h1 className="header-title">My Tasks</h1>

        <Button variant="light" onClick={() => setIsTaskFormOpen(true)}>
          Add new task
        </Button>
      </header>
      {isTaskFormOpen && (
        <div className="add-new-task-block">
          <CloseButton
            onClick={() => {
              setIsTaskFormOpen(false);
              setNewTask(initialState);
            }}
          />
          <h2 className="new-task-title">New Task</h2>
          <NewTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            initialState={initialState}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        </div>
      )}

      <main>
        {todos[0] && (
          <ToggleFilterGroup setFilter={setFilter} counter={counter} />
        )}

        <ul className="todo-list">
          {filtered.map((todo) => (
            <TodoItem
              todo={todo}
              editTask={editTask}
              isEditing={isEditing}
              newTask={newTask}
              key={todo.id}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
