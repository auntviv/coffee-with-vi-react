import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { createPost, getTags } from "./PostManager.js";
import "./Post.css";
import { Button } from "@mui/material";

export const PostForm = () => {
  const [tags, setTags] = useState([]);
  const [currentPost, setCurrentPost] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tags: [],
  });
  const history = useHistory();

  useEffect(() => {
    getTags().then((data) => setTags(data));
  }, []);

  const updatePostState = (evt) => {
    evt.preventDefault();
    const copy = { ...currentPost };
    let key = evt.target.name;
    copy[key] = evt.target.value;

    setCurrentPost(copy);
  };

  const tagToggle = (evt) => {
    const copy = { ...currentPost };
    if (evt.target.checked) {
      copy.tags.push(parseInt(evt.target.value)); //if changed to checked, add the tag
    } else {
      copy.tags.splice(copy.tags.indexOf(evt.target.value), 1); //if changed to untagged, find the index of the id, and then remove one element starting at that index
    }
     setCurrentPost(copy);
  };

  return (
    <form className="postForm">
      <h2 className="postForm__name"> Blog Entry</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="">Title: </label>
          <input
            type="text"
            name="title"
            required
            autoFocus
            className="form-control  .form-control-sm"
            value={currentPost.title}
            onChange={updatePostState}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Description: </label>
          <input
            type="textarea"
            name="description"
            required
            autoFocus
            className="form-control .form-control-lg"
            value={currentPost.description}
            onChange={updatePostState}
          />
        </div>
        <div className="form-group">
          <label>
            Photo:
            <input
              className="form-control .form-control-sm"
              name="imageUrl"
              type="text"
              required
              autoFocus
              value={currentPost.imageUrl}
              onChange={updatePostState}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor=""> </label>
          {tags.map((tag) => {
            return (
              <>
                {` ${tag.label}: `}
                <input
                  type="checkbox"
                  required
                  value={tag.id}
                  onChange={tagToggle}
                />
              </>
            );
          })}
        </div>
      </fieldset>

      <Button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const post = {
            title: currentPost.title,
            description: currentPost.description,
            imageUrl: currentPost.imageUrl,
            tags: currentPost.tags,
          };

          createPost(post).then(() => history.push("/posts"));
          //route the user to the posts page
        }}
      >
        Create
      </Button>
    </form>
  );
};
