import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPosts, deletePost } from "./PostManager.js";
import "./Post.css";

export const PostList = (user) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);
//not saving just accessing our (data)remember its a parameter so it can be named anything, 
//we are just saving it with a variable name that's relevant to the code

  const history = useHistory();

  return (
    <>
      <h2>
        <button
          onClick={() => history.push({ pathname: "/posts/new" })}
        >
          New Blog Post
        </button>
      </h2>

      <ul className="PostListObj">
        {posts.map((PostObject) => {
            
          return (
            <div>
            <div className="post__titles">   
                    <img src={PostObject.imageUrl} height="auto" width="300" />
                </div>
            
                
            <Link to={`/details/${PostObject.id}`}>{PostObject.title}</Link>
             
            {parseInt(localStorage.getItem("user")) === PostObject.user.id ? 
            <div>
              <button
                className="btn-primary"
                onClick={() => deletePost(PostObject.id).then(res => setPosts(res))
                    .then(() => history.push("/posts"))
                }
              >
                Delete
              </button>
              <button
                className="btn-primary"
                onClick={() => history.push( `/posts/edit/${PostObject.id}`
                  )
                }
              >
                Edit
              </button>
              
            </div>
            : "" }
            </div>
       )}
         )
        }
      </ul>
    </>
  );
};
