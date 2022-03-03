const { useState } = require("react");

export default function Todo() {
  const [todo, changeTodo] = useState(" ");
  const [warning, changeWarning] = useState(null);

  const handelChange = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes(".js")
      ? "You need javaScripts skill to complite the task"
      : null;
    changeTodo(inputValue);
    changeWarning(warning);
  };
  return (
    <>
      <h5>{todo}</h5>
      <input name="todo" value={todo} onChange={handelChange} />
      <h3>{warning || "Good Choice"}</h3>
    </>
  );
}
