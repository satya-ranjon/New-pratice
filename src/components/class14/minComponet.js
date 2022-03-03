import ClickCount from "./clickCount";
import Counter from "./counter";
import Section from "./Section";
import React from "react";
import ThemeContext from "./context/context";

export default class minComponent extends React.Component {
  state = {
    theme: "dark",
    handelTheme: () => {
      this.setState(({ theme }) => {
        if (theme === "dark") {
          return {
            theme: "light",
          };
        }
        return {
          theme: "dark",
        };
      });
    },
  };

  render() {
    return (
      <>
        <h2 style={{ textAlign: "center" }}>
          This is React Context API - contextType & useContext hook
        </h2>

        <Counter>
          {(count, handelCount) => (
            <ClickCount count={count} handelCount={handelCount} />
          )}
        </Counter>
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            handelTheme: this.state.handelTheme,
          }}
        >
          <Section />
        </ThemeContext.Provider>
      </>
    );
  }
}
