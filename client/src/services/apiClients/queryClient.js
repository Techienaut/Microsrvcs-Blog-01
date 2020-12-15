import { Client } from "./client";
import { instance } from "../config";

class QueryClient extends Client {
  constructor() {
    super();
    this.PORT = "4002";
    this.localInstance = instance(this.PORT);
  }
  async getPosts() {
    const response = await this.localInstance.get("/posts");

    return response;
  }
}

export const queryClient = new QueryClient();
