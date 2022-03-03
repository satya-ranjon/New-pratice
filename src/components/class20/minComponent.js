import { useState } from "react";
import Component from "./myComponent";

export default function minComponent() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [show, setShow] = useState(true);

  return (
    <>
      <div>{show && <Component />}</div>
      <p>
        <button onClick={() => setShow((prevShow) => !prevShow)}>
          {show ? "Hide Post" : "Show Post"}
        </button>
      </p>
    </>
  );
}
