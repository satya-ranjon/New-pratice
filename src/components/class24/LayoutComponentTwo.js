import UseWindowWidth from "./hooks/useWindowWidth";

export default function layoutComponentOne() {
  const onSmallScreen = UseWindowWidth(700);

  return (
    <div className={onSmallScreen ? "Small" : "large"}>
      <h1>
        This is another component className ={" "}
        {onSmallScreen ? "Small" : "large"}
      </h1>
    </div>
  );
}
