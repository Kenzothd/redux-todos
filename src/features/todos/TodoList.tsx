import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  completedTodo,
  CounterState,
  editTodo,
  removeTodo,
} from "./todosSlice";

function TodoList() {
  const inputValue = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const [toggleEdit, setToggleEdit] = useState(
    todos.map((e) => ({ value: e.task, toggle: false }))
  );

  useEffect(() => {
    setToggleEdit(todos.map((e) => ({ value: e.task, toggle: false })));
  }, [todos]);

  const handleComplete = (e: any) => {
    dispatch(completedTodo({ id: e.target.name }));
  };

  const handleOnChange = (e: any) => {
    let i = e.target.name;
    let newArray = [...toggleEdit];
    newArray[i].value = e.target.value;
    setToggleEdit(newArray);
  };

  const handleToggleEdit = (e: any) => {
    let i = e.target.name;
    if (toggleEdit[i].toggle) {
      dispatch(editTodo({ id: i, task: inputValue.current?.value }));
    }
    let newArray = [...toggleEdit];
    newArray[i].toggle = !newArray[i].toggle;
    setToggleEdit(newArray);
  };

  const handleCancleEdit = (e: any) => {
    let i = e.target.name;
    let newArray = [...toggleEdit];
    newArray[i].toggle = false;
    toggleEdit[i].value = todos[i].task;
    setToggleEdit(newArray);
  };

  const handleRemove = (e: any) => {
    dispatch(removeTodo({ id: e.target.name }));
  };

  return (
    <div>
      <h2 className="font-bold text-center">Todo List</h2>
      <div className="mx-60">
        {todos?.map((e, i) =>
          e.completed === false ? (
            <div className="flex justify-between items-center my-2" key={i}>
              <div className="flex items-center gap-2">
                {toggleEdit[i]?.toggle === false ? (
                  <>
                    <p>{e?.task}</p>
                    <button
                      name={`${i}`}
                      className="transition ease-in-out hover:scale-125"
                      onClick={handleToggleEdit}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4 pointer-events-none"
                      >
                        <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      ref={inputValue}
                      value={toggleEdit[i]?.value}
                      name={`${i}`}
                      onChange={handleOnChange}
                      className="border rounded border-black p-0.5"
                    />
                    <button
                      className="border rounded border-black  p-0.5"
                      onClick={handleToggleEdit}
                      name={`${i}`}
                    >
                      done
                    </button>
                    <button name={`${i}`} onClick={handleCancleEdit}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 pointer-events-none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              <div className="flex items-center gap-4">
                <label>
                  Completed:{" "}
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    name={`${i}`}
                    onChange={handleComplete}
                  />
                </label>
                <button
                  className="transition ease-in-out hover:scale-110"
                  name={`${i}`}
                  onClick={handleRemove}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 pointer-events-none"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default TodoList;
