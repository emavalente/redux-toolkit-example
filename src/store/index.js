import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducers,
  },
});
