import axios from "axios";

import { putData } from "./axiosPut";
jest.mock("axios");
const url = "https://jsonplaceholder.typicode.com/todos";
const data = { id: 201, title: "Todo 1" };
test("put data resolves", async () => {
  (axios.put as jest.Mock).mockResolvedValue({ data: {} });
  const result = await putData(url, data);
  expect(result).toEqual({ data: {} });
});

test("put data fails", async () => {
  const error = new Error("Error");
  (axios.put as jest.Mock).mockRejectedValue(error);
  await expect(putData(url, data)).rejects.toThrow(error);
});
