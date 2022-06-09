import axios from "axios";

export const postData = async (url: string, user: any) => {
  try {
    const result = await axios.post(url, user);
    return result;
  } catch (error) {
    throw error;
  }
};
