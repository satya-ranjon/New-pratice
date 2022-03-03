import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ReactPost({ match }) {
  console.log(match);

  let location = useLocation();
  console.log(location);

  const slug = useParams();
  console.log(slug);

  return (
    <div>
      ReactPost - {slug.catagore} / {slug.topic}
    </div>
  );
}
