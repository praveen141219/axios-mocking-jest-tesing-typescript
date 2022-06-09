import axios from "axios";

export const fetchData = async (url: string) => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    throw error;
  }
};

export const postData = async (url: string, user: any) => {
  try {
    const result = await axios.post(url, user);
    return result;
  } catch (error) {
    throw error;
  }
};

export const putData = async (url: string, data: any) => {
  try {
    const result = await axios.put(url, data);
    return result;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (url: string, id: number) => {
  try {
    const result = await axios.delete(url + "/" + id);
    return result;
  } catch (error) {
    throw error;
  }
};
