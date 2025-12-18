import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  increment,
  decrement,
  reset,
  doubleIncrement,
} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleDoubleIncrement = () => {
    dispatch(doubleIncrement());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleDoubleIncrement}>Double Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
