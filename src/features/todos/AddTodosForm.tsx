import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTodo } from "./todosSlice";

function AddTodosForm() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: todos.length,
        task: inputRef.current?.value,
        completed: false,
      })
    );
    e.target.reset();
  };

  return (
    <div className="mx-auto text-center flex items-center gap-2">
      <form
        onSubmit={handleSubmit}
        className="border border-black rounded  p-2"
      >
        <label>
          Input Task:{" "}
          <input ref={inputRef} className="border-2" name="task" type="text" />
        </label>
        <button
          type="submit"
          className="border text-sm rounded p-1 bg-slate-100 transition ease-in-out hover:scale-105 hover:bg-slate-200"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default AddTodosForm;
