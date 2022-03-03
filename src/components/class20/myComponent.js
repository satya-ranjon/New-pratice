/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

export default function myComponet() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(`Counter ${count}`);
    document.title = `Counter ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("starting timer");
    const intravil = setInterval(() => {
      setDate(() => new Date());
    }, 1000);

    return () => {
      clearInterval(intravil);
    };
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Class is useEffect</h1>
      <h1>{date.toLocaleTimeString()}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Add + 1</button>
    </>
  );
}
