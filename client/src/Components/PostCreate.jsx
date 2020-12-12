import React, { useState } from "react";
import axios from "axios";
import { useHandleChange } from "./share/helpers/useHandleChange";
import { postManager } from "../services/post/postManager";

export const PostCreate = () => {
  const [title, , handleTitle] = useHandleChange("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postManager.createPost(title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={handleTitle}
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
