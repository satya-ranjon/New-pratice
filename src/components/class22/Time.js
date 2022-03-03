import { useState, useEffect, useRef } from "react";

function Time() {
  const [date, setDate] = useState(new Date());
  const buttonReff = useRef();

  useEffect(() => {
    buttonReff.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(buttonReff.current);
    };
  }, []);

  return (
    <>
      <p>{date.toLocaleTimeString()}</p>
      <button
        onClick={() => {
          clearInterval(buttonReff.current);
        }}
      >
        Stop
      </button>
    </>
  );
}

export default Time;
