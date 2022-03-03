/* eslint-disable react-hooks/rules-of-hooks */
import Button from "./Button";
import ShowCount from "./showCount";
import Title from "./Title";
import { useState, useCallback, useMemo } from "react";

export default function minComponent() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const IncrementByOne = useCallback(() => {
    setCount1((prevState) => prevState + 1);
  }, []);

  const IncrementByFive = useCallback(() => {
    setCount2((prevState) => prevState + 5);
  }, []);

  const isEventOrOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count1 % 2 === 0;
  }, [count1]);

  return (
    <>
      <Title />
      <div>
        <ShowCount count={count1} title="Increment One" />
        <h4>{isEventOrOdd ? "Even" : "Odd"}</h4>
        <Button handelClick={IncrementByOne}> Increment By One </Button>
      </div>
      <div>
        <ShowCount count={count2} title="Increment Five" />
        <Button handelClick={IncrementByFive}>Increment By Five</Button>
      </div>
    </>
  );
}
