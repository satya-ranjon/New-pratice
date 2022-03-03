/* eslint-disable react-hooks/rules-of-hooks */
import Input from "./Input";
import { useEffect, useRef } from "react";
import Time from "./Time";
export default function minComponent() {
  const inputReff = useRef(null);
  useEffect(() => {
    inputReff.current.focus();
  }, []);

  return (
    <>
      <h2>
        <Time />
      </h2>
      <Input ref={inputReff} type="text" placeholder="Enter Name" />
    </>
  );
}
