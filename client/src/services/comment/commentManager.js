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
}

export const commentManager = new CommentManager();
