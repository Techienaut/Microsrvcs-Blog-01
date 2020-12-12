import { commentClient } from "../apiClients/commentClient";

class CommentManager {
  async createPost(title) {
    try {
      await commentClient.createPostByTitle(title);

      return { contentStatus: "ok" };
    } catch (e) {
      return { contentStatus: "error" };
    }
  }
}

export const commentManager = new CommentManager();
