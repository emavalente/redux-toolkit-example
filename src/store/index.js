import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from "../features/tasks/taskSlice";

// Definicion del Store Global
export const store = configureStore({
  reducer: {
    tasks: tasksReducers,
  },
});
