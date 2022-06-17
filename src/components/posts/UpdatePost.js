import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { editPost, getPost, getTags } from "./PostManager.js";
import "./Post.css";

export const UpdatePostForm = () => {
  const [tags, setTags] = useState([]);
  const [currentPost, setCurrentPost] = useState({
    title: "",
    description: "",
    imageUrl: "",
    tags: [],
  });
  const history = useHistory();

  const { postId } = useParams()

  useEffect(() => {
    getTags().then((data) => setTags(data));
  }, []);

  useEffect(() => {
    getPost(postId).then((data) =>
      setCurrentPost({
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        tags: data.tags.map((tag) => {
            return tag.id
        }),
    })
    );

  }, []);

  const changePostState = (evt) => {
    evt.preventDefault();
    const copy = { ...currentPost };
    let key = evt.target.name;
    copy[key] = evt.target.value;

    setCurrentPost(copy);
  };

  const changeTagToggle = (evt) => {
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
            className="form-control"
            value={currentPost.title}
            onChange={changePostState}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Description: </label>
          <input
            type="textarea"
            name="description"
            required
            autoFocus
            className="form-control"
            value={currentPost.description}
            onChange={changePostState}
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
              onChange={changePostState}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="">Tags: </label>
          {tags.map((tag) => {
            return (
              <>
                {` ${tag.label}: `}
                <input
                  type="checkbox"
                  required
                  checked={currentPost.tags.includes(tag.id)}
                  value={tag.id}
                  onChange={changeTagToggle}
                />
              </>
            );
          })}
        </div>
      </fieldset>

      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();

          const post = {
            title: currentPost.title,
            description: currentPost.description,
            imageUrl: currentPost.imageUrl,
            tags: currentPost.tags,
          };

          editPost(postId, currentPost).then(() => history.push("/posts"));
          //route the user to the posts page
        }}
      >
        Update
      </button>
    </form>
  );
};
