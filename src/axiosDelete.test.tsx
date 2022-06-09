import axios from "axios";
import { deleteData } from "./axiosDelete";
jest.mock("axios");
const url = "https://jsonplaceholder.typicode.com/todos";
const id = 1;
test("delete data resolves", async () => {
  (axios.delete as jest.Mock).mockResolvedValue({ data: {} });
  const result = await deleteData(url, id);
  expect(result).toEqual({ data: {} });
});
test("delete data fails", async () => {
  const error = new Error("Error");
  (axios.delete as jest.Mock).mockRejectedValue(error);
  await expect(deleteData(url, id)).rejects.toThrow(error);
});
