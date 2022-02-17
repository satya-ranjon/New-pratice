export default function hoverCount({ handelCount, count }) {
  return <h3 onMouseOver={handelCount}>Hover Count : {count}</h3>;
}
