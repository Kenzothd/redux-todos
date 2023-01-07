import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addTodo } from "./todosSlice";

function AddTodosForm() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { value } = event.target.task;
    dispatch(addTodo({ id: todos.length + 1, task: value, completed: false }));
  };

  return (
    <form
      className="border border-black rounded mx-auto p-2 text-center"
      onSubmit={handleSubmit}
    >
      <fieldset className="flex items-center gap-2">
        <label>
          Input Task: <input className="border-2" name="task" />
        </label>
        <button className="border text-sm rounded p-1 bg-slate-100 transition ease-in-out hover:scale-105 hover:bg-slate-200">
          Create
        </button>
      </fieldset>
    </form>
  );
}

export default AddTodosForm;
