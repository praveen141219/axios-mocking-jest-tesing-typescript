import axios from "axios";
export const deleteData = async (url: string, id: number) => {
  try {
    const result = await axios.delete(url + "/" + id);
    return result;
  } catch (error) {
    throw error;
  }
};
