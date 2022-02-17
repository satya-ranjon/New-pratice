import WithCounter from "./HOC/withCounter";

function hoverCount({ handelCount, count }) {
  return <h3 onMouseOver={handelCount}>Hover Count : {count}</h3>;
}

export default WithCounter(hoverCount);
