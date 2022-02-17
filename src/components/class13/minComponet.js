import ClickCount from "./clickCount";
import Counter from "./counter";
import HoverCount from "./hoverCount";
export default function minComponent() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>This is Rander Props</h2>
      <Counter>
        {(count, handelCount) => (
          <ClickCount count={count} handelCount={handelCount} />
        )}
      </Counter>
      <Counter>
        {(count, handelCount) => (
          <HoverCount count={count} handelCount={handelCount} />
        )}
      </Counter>
    </>
  );
}
