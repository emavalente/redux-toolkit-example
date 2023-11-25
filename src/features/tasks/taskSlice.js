import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState, // estado inicial.
  reducers: {
    // Funciones que actualizan el estado.
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

// Desestructuramos y exportamos cada reducer del Slice.
export const { addTask, deleteTask, updateTask } = taskSlice.actions;

// Esportamos unicamente los reducers en conjunto.
export default taskSlice.reducer;
