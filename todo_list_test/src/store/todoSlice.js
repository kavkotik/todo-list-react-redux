import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.newTask.title,
        description: action.payload.newTask.description,
        done: action.payload.newTask.done,
      });
    },
    delTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      state.todos.forEach((todo) => {
        if (action.payload.id === todo.id) {
          todo.done = !todo.done;
        }
      });
    },
    editTodo(state, action) {
      state.todos.forEach((todo) => {
        if (action.payload.newTask.id === todo.id) {
          todo.title = action.payload.newTask.title;
          todo.description = action.payload.newTask.description;
          todo.done = action.payload.newTask.done;
        }
      });
    },
  },
});

export const { addTodo, delTodo, toggleTodoCompleted, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
