import axios from "axios";
import { fetchData } from "./axiosGet";

jest.mock("axios");
const url = "https://jsonplaceholder.typicode.com/todos/1";
test("fetchData pass", async () => {
  const data = { id: 1, title: "Todo 1" };
  (axios.get as jest.Mock).mockResolvedValue({ data });
  const result = await fetchData(url);
  expect(result).toEqual(data);
});

test("fetchData fail", async () => {
  const error = new Error("Error");
  (axios.get as jest.Mock).mockRejectedValue(error);
  await expect(fetchData(url)).rejects.toThrow(error);
});
