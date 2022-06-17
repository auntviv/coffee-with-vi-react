import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList";
import { PostForm } from "./posts/PostForm";
import { TagList } from "./tags/TagList";
import Details  from "./posts/Details"
import { UpdatePostForm } from "./posts/UpdatePost";

export const ApplicationViews = () => {
    return (
      <>
        <main
          style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem",
          }}
        >
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route exact path="/tags/:id(\d+)">
            <TagList />
          </Route>
          <Route exact path="/posts/new">
            <PostForm />
          </Route>
          <Route exact path="/details/:id(\d+)">
        <Details />
        </Route>
        <Route exact path= "/posts/edit/:postId(\d+)">
          <UpdatePostForm />
        </Route>
        </main>
      </>
    );
  };
  