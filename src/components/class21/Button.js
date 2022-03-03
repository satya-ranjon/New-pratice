import React from "react";

function Button({ handelClick, children }) {
  console.log(`Button Component ${children}`);
  return (
    <>
      <button onClick={handelClick}>{children}</button>
    </>
  );
}
export default React.memo(Button);
