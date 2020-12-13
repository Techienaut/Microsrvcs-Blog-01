import React from "react";
import { useHandleChange } from "./share/helpers/useHandleChange";
import { commentManager } from "../services/comment/commentManager";

export const CommentCreate = ({ postID }) => {
  const [content, setContent, handleContent] = useHandleChange("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await commentManager.createComment(postID, content);
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            type="text"
            className="form-control"
            value={content}
            onChange={handleContent}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
