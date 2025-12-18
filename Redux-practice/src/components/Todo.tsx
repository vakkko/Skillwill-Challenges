import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const [state, setState] = useState("");
  const [debounced, setDebounced] = useState("");
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(state);
    }, 500);

    return () => clearInterval(timer);
  }, [state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleClick = () => {
    dispatch(addTodo(debounced));
  };

  return (
    <div>
      <input value={state} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add</button>
      <div>
        <h1>List</h1>
        {todos.map((todo) => (
          <p key={todo.id}>{todo.text}</p>
        ))}
      </div>
    </div>
  );
}
