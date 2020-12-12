import { Client } from "./client";

class CommentClient extends Client {
  constructor() {
    super();
    this.PORT = "4001";
    this.localInstance = instance(this.PORT);
  }

  async createPostByTitle(title) {
    const response = await this.localInstance.post("/posts", { title });

    return response;
  }
}

export const commentClient = new CommentClient();
