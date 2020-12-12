import Axios from "axios";

export const instance = (PORT) => {
  const baseURL = `http://localhost:${PORT}`;
  return Axios.create({ baseURL: baseURL });
};
