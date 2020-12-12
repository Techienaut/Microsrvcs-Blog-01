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

  async getPosts() {
    try {
      const response = await postClient.getPosts();
      const data = response.data;
      return { data: data, contentStatus: "ok" };
    } catch (e) {
      return { data: {}, contentStatus: "error" };
    }
  }
}

export const postManager = new PostManager();
