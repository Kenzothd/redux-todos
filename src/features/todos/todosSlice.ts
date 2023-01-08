import {
  createSlice,
  current,
  original,
  PayloadAction,
} from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface CounterState {
  id: number;
  task: string;
  completed: boolean;
}

// Define the initial state using that type
const initialState: CounterState[] = [
  {
    id: 0,
    task: "Create Todos",
    completed: false,
  },
  {
    id: 1,
    task: "Learn Java",
    completed: false,
  },
  {
    id: 2,
    task: "Practise Data Structures and Algorithm",
    completed: false,
  },
  {
    id: 3,
    task: "Learn React",
    completed: true,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    editTodo: (state, action) => {
      const { id, task } = action.payload;
      const existingTodo = state.find((task) => task.id === Number(id));
      if (existingTodo) {
        existingTodo.task = task;
      }
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((task) => task.id !== Number(id));
    },
    completedTodo: (state, action) => {
      const { id } = action.payload;
      const existingTodo = state.find((task) => task.id === Number(id));
      if (existingTodo) {
        existingTodo.completed = !existingTodo.completed;
      }
    },
  },
});

export const { addTodo, editTodo, removeTodo, completedTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
