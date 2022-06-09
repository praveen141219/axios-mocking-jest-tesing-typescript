import axios from "axios";

export const putData = async (url: string, data: any) => {
  try {
    const result = await axios.put(url, data);
    return result;
  } catch (error) {
    throw error;
  }
};
