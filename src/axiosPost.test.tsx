import axios from "axios";
import { postData } from "./axiosPost";
jest.mock("axios");
const url = "https://jsonplaceholder.typicode.com/todos";

const data = { id: 201, title: "Todo 1" };
test("post data resolves", async () => {
  (axios.post as jest.Mock).mockResolvedValue({ data });
  const result = await postData(url, data);
  expect(result).toEqual({ data });
});

test("post data fails", async () => {
  const error = new Error("Error");
  (axios.post as jest.Mock).mockRejectedValue(error);
  await expect(postData(url, data)).rejects.toThrow(error);
});
