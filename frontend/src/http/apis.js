import axios from "axios";

const apis = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const registerUser = async (data) => {
  return apis.post("/user/register", data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};

export const loginUser = async (data) => {
  return apis.post("/user/login", data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
