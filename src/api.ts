import axios from "axios";
import { getIdentityToken } from "../cognitoAuth";

const BASE_URL =
  import.meta.env.BASE_URL ||
  "https://9mdink4tu2.execute-api.eu-west-2.amazonaws.com/Prod";

export const getAxios = async () => {
  const IDToken = await getIdentityToken();
  const _axios = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${IDToken}` },
  });
  return _axios;
};

type Task = {
  taskName: string;
};

export const getTasks = async () => {
  try {
    const axios = await getAxios();
    const response = await axios.get<{ tasks: Task[] }>("/task");
    return response.data.tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async (task: Task) => {
  try {
    const axios = await getAxios();
    await axios.post("/task", task);
    return;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
