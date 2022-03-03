import Card from "./Card";
import GlobalStyled from "./styles/Global.styled";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import BlackTheme from "./BlackTheme";
import WhiteTheme from "./WhiteTheme";

export default function MinComponent() {
  const [Theme, setTheme] = useState("white");
  return (
    <>
      <h1>Learn Style Component</h1>
      <button
        onClick={() =>
          setTheme((Theme) => (Theme === "dark" ? "white" : "dark"))
        }
      >
        Theme {Theme}
      </button>

      <GlobalStyled />
      <ThemeProvider theme={Theme === "dark" ? BlackTheme : WhiteTheme}>
        <Card />
      </ThemeProvider>
    </>
  );
}
