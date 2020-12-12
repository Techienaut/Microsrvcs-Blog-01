import { postClient } from "../apiClients/postClient";

class PostManager {
  async createPost(title) {
    try {
      await postClient.createPostByTitle(title);

      return { contentStatus: "ok" };
    } catch (e) {
      return { contentStatus: "error" };
    }
  }
}

export const postManager = new PostManager();
