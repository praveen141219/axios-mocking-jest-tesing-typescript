import axios from "axios";

import { fetchData, postData, deleteData, putData } from "./allInOne";

const url = "https://jsonplaceholder.typicode.com/users";
const data = { id: 201, name: "Todo 1" };
jest.mock("axios");

test("fetch data resolves", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: data });
  const result = await fetchData(url);
  expect(result).toEqual({ data: data });
});

test("fetch data fails", async () => {
  const error = new Error("Error");
  (axios.get as jest.Mock).mockRejectedValue(error);
  await expect(fetchData(url)).rejects.toThrow(error);
});

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

test("put data resolves", async () => {
  (axios.put as jest.Mock).mockResolvedValue({ data: data });
  const result = await putData(url, data);
  expect(result).toEqual({ data: data });
});

test("put data fails", async () => {
  const error = new Error("Error");
  (axios.put as jest.Mock).mockRejectedValue(error);
  await expect(putData(url, data)).rejects.toThrow(error);
});

test("delete data resolves", async () => {
  (axios.delete as jest.Mock).mockResolvedValue({ data: {} });
  const result = await deleteData(url, data.id);
  expect(result).toEqual({ data: {} });
});

test("delete data fails", async () => {
  const error = new Error("Error");
  (axios.delete as jest.Mock).mockRejectedValue(error);
  await expect(deleteData(url, data.id)).rejects.toThrow(error);
});
