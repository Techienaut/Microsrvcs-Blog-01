import { Client } from "./client";
import { instance } from "../config";

class PostClient extends Client {
  constructor() {
    super();
    this.PORT = "4000";
    this.localInstance = instance(this.PORT);
  }

  async createPostByTitle(title) {
    const response = await this.localInstance.post("/posts", { title });

    return response;
  }
}

export const postClient = new PostClient();
