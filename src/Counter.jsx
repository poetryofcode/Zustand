import useStore from "./store";

function Counter() {
  const count = useStore((state) => state.count);
  const increase = useStore((state) => state.increase);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default Counter;
