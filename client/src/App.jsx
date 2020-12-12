import React from "react";
import { PostCreate } from "./Components/PostCreate";
import { PostList } from "./Components/PostList";

export const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
