import React, { useState, useEffect } from "react";
import { commentManager } from "../services/comment/commentManager";

export const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const response = await commentManager.getComments(postId);
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
