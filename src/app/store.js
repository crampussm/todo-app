import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Creating redux store and exporting it
export const store = configureStore({
  reducer: todoReducer,
});
