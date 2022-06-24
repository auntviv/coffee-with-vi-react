import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getPosts, deletePost } from "./PostManager.js";
import "./Post.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from "@mui/material";

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
        <Button variant="outlined"
          onClick={() => history.push({ pathname: "/posts/new" })}
        >
          New Blog Post
        </Button>
      </h2>

      <ul className="PostListObj">
        {posts.map((PostObject) => {
            
          return (
            <div>
            <li className="post__titles">   
            
                    <img src={PostObject.imageUrl} height="250" width="250" />
                </li>
            
                
           
            <Button
                className="btn-primary"
                onClick={() => history.push( `/details/${PostObject.id}`
                  )
                }
              >
             {PostObject.title}
              </Button>
           
             
            {parseInt(localStorage.getItem("user")) === PostObject.user.id ? 
            <div>
              <IconButton
                className="btn-primary"
                onClick={() => deletePost(PostObject.id).then(res => setPosts(res))
                    .then(() => history.push("/posts"))
                }
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                className="btn-primary"
                onClick={() => history.push( `/posts/edit/${PostObject.id}`
                  )
                }
              >
                <EditIcon />
              </IconButton>
              
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
