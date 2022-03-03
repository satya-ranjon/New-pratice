import React from "react";
function Title() {
  console.log("This is title component- - - - - - -");
  return <h2>useCallback or useMemo</h2>;
}
export default React.memo(Title);
