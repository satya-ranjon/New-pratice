import WithCounter from "./HOC/withCounter";
function clickCount({ handelCount, count }) {
  return <button onClick={handelCount}> Click : {count}</button>;
}

export default WithCounter(clickCount);
