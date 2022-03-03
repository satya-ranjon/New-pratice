import { useEffect, useState } from "react";

export default function GetPost() {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        setLoding(false);
        setPost(data);
        setError("");
      })
      .catch((error) => {
        setLoding(false);
        setPost({});
        setError(error);
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <>
      <div>
        {loding ? "Loding ........" : post.title}
        {error ? error : null}
      </div>
    </>
  );
}
