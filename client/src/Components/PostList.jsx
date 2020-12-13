import React, { useState, useEffect } from "react";
import { postManager } from "../services/post/postManager";
import { CommentCreate } from "./CommentCreate";

export const PostList = () => {
  const [posts, SetPosts] = useState({});
  const getPosts = async () => {
    const response = await postManager.getPosts();
    SetPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postID={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
