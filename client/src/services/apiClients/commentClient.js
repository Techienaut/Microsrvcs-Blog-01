import { Client } from "./client";
import { instance } from "../config";

class CommentClient extends Client {
  constructor() {
    super();
    this.PORT = "4001";
    this.localInstance = instance(this.PORT);
  }

  async createCommentByContent(postID, content) {
    const response = await this.localInstance.post(
      `/posts/${postID}/comments`,
      { content }
    );

    return response;
  }

  async getComments(postId) {
    const response = await this.localInstance.get(`/posts/${postId}/comments`);

    return response;
  }
}

export const commentClient = new CommentClient();
