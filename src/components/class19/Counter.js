import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount((prevState) => prevState + 1);
      i += 1;
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Class is useState</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Add 1
      </button>
      <button onClick={addFive}>Add 5</button>
    </>
  );
}
