import ClickCount from "./clickCount";
import HoverCount from "./hoverCount";

export default function minComponent() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>This is Higher-Order Components</h2>
      <ClickCount />
      <HoverCount />
    </>
  );
}
