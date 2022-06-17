
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const TagList = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/posts?tag=${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
      .then((res) => res.json())
      .then((tagsArray) => {
        setPosts(tagsArray);
      });
  }, [id]);

  return (
    <>
      {posts.map((postObject) => {
        return (
          <Link to={`/details/${postObject.id}`}>
            <h1 key={postObject.id}>
              <h1> {postObject?.label}</h1>
            <img src={postObject?.imageUrl} height="500" width="450" /></h1>{" "}
            {postObject.title}
          </Link> 
        );
      })}
    </>
  );
};