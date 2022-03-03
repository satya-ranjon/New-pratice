import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
export default function SinglePost() {
  let parm = useParams();
  console.log(parm);

  const located = useLocation();
  console.log(located);
  const navigate = useNavigate();

  const GoBack = () => {
    //     navigate("/all-post", {
    //       replace: true,
    //     });
    navigate(-1);
  };
  return (
    <div>
      <h2>Single Post</h2>
      Path Name = {located.pathname}
      <br />
      Post - {parm.catagore} / {parm.tag}
      <br />
      <br />
      <button onClick={GoBack}> Go to all Post</button>
    </div>
  );
}
