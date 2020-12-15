import { queryClient } from "../apiClients/queryClient";

class QueryManager {
  async getPosts() {
    try {
      const response = await queryClient.getPosts();
      const data = response.data;
      return { data: data, contentStatus: "ok" };
    } catch (e) {
      return { data: {}, contentStatus: "error" };
    }
  }
}

export const queryManager = new QueryManager();
