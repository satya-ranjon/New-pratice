export default function hoverCount({ handelCount, count, theme, handelTheme }) {
  const style =
    theme === "dark" ? { background: "#000000", color: "#ffffff" } : null;
  console.log("Hover Rander");
  return (
    <>
      <h3 style={style} onMouseOver={handelCount}>
        Hover Count : {count}
      </h3>
      <button onClick={handelTheme}>Theme Chanage {theme} </button>
    </>
  );
}
