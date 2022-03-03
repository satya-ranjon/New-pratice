import React from "react";

function ShowCount({ count, title }) {
  console.log(`Rendring ${title}`);
  return (
    <h3>
      {title}:{count}
    </h3>
  );
}
export default React.memo(ShowCount);
