export default function clickCount({ handelCount, count }) {
  return <button onClick={handelCount}> Click : {count}</button>;
}
