//getting data from the api and putting it into my application state
//this is how we display our data from the api in react
export const getPosts = () => {
    return fetch("http://localhost:8000/posts", {
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        //EVERY fetch call takes authorization header that we've added to here, let's the server know which user is logged in
      },
    }).then((response) => response.json());
    //converting this json encoded string into javascript
  };
  
  export const createPost = (post) => {
    return fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then((response) => response.json());
  };
  
  export const deletePost = (id, post) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    }).then(getPosts);
  };
  
  export const editPost = (id, post) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post)
    });
  };
  
  export const getTags = () => {
    return fetch(`http://localhost:8000/tags`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    }).then((res) => res.json());
  };

  
  export const getPost = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    }).then((res) => res.json());
  };
  

  