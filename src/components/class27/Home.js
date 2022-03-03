import React from "react";
import { useLocation, useRouteMatch } from "react-router-dom";

export default function Home() {
  let location = useLocation();
  console.log(location);

  let { url } = useRouteMatch();
  let useRot = useRouteMatch();
  console.log(useRot);
  return (
    <div>
      Home / <code>{location.pathname}</code>
    </div>
  );
}
