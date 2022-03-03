import Counter from "./counter";
import HoverCount from "./hoverCount";
import ThemeContext from "./context/context";
import React, { useContext } from "react";

// export default function Content() {
//   return (
//     <Counter>
//       {(count, handelCount) => {
//         return (
//           <ThemeContext.Consumer>
//             {({ theme, handelTheme }) => (
//               <HoverCount
//                 count={count}
//                 handelCount={handelCount}
//                 theme={theme}
//                 handelTheme={handelTheme}
//               />
//             )}
//           </ThemeContext.Consumer>
//         );
//       }}
//     </Counter>
//   );
// }

// export default function Content() {
//   const { theme, handelTheme } = useContext(ThemeContext);
//   return (
//     <Counter>
//       {(count, handelCount) => (
//         <HoverCount
//           count={count}
//           handelCount={handelCount}
//           theme={theme}
//           handelTheme={handelTheme}
//         />
//       )}
//     </Counter>
//   );
// }

export default class Content extends React.Component {
  render() {
    const { theme, handelTheme } = this.context;
    console.log("Content Rander");
    return (
      <Counter>
        {(count, handelCount) => (
          <HoverCount
            count={count}
            handelCount={handelCount}
            theme={theme}
            handelTheme={handelTheme}
          />
        )}
      </Counter>
    );
  }
}

Content.contextType = ThemeContext;
