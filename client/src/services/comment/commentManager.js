import { commentClient } from "../apiClients/commentClient";

class CommentManager {
  async createComment(postId, content) {
    try {
      await commentClient.createCommentByContent(postId, content);

      return { contentStatus: "ok" };
    } catch (e) {
      return { contentStatus: "error" };
    }
  }

  async getComments(postId) {
    try {
      const response = await commentClient.getComments(postId);
      const data = response.data;
      return { data: data, contentStatus: "ok" };
    } catch (e) {
      return { data: {}, contentStatus: "error" };
    }
  }
}

export const commentManager = new CommentManager();
