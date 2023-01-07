import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AddTodosForm from "./features/todos/AddTodosForm";
import TodoList from "./features/todos/TodoList";
import CompletedTodoList from "./features/todos/CompletedTodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mx-80 my-10 flex flex-col gap-5">
      <h1 className="font-bold text-lg text-center">Redux Todo List</h1>
      <AddTodosForm />
      <TodoList />
      <CompletedTodoList />
    </div>
  );
}

export default App;
