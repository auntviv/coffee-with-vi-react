import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "./PostManager";

const Details = () => {
  const [details, setDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    getPost(id).then((data) => setDetails(data));
  }, []);


  return (
    <section className="post" key={id}>
        
      <img src={details?.imageUrl} height="auto" width="300" />
      <h1 className="post__title">{details?.title}</h1>
      <h2>Description</h2>
      <div className="post__description">{details?.description}</div>
    </section>
  );
};
export default Details;


