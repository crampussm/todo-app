import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo-app-todos")),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("addtodo-works");
      const todo = {
        id: nanoid(),
        name: action.payload.name,
        text: action.payload.details,
        status: "pending",
      };
      console.log(todo);
      state.todos.push(todo);
      localStorage.setItem("todo-app-todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      console.log("removetodo-works");
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      localStorage.setItem("todo-app-todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      console.log("updatetodo-works");
      console.log(action.payload);
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          (todo.name = action.payload.name),
            (todo.text = action.payload.details);
          console.log(todo);
        }
      });
      localStorage.setItem("todo-app-todos", JSON.stringify(state.todos));
    },
    markCompleteTodo: (state, action) => {
      console.log("markcompletetodo-works");
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.status = "completed";
          console.log(todo);
        }
      });
      localStorage.setItem("todo-app-todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, updateTodo, markCompleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
