import { USER_API_END_POINT } from "@/utilis/const";
import axios from "axios";

const apis = axios.create({
  baseURL: `${USER_API_END_POINT}`,
});

export const registerUser = async (data) => {
  return apis.post("/register", data, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
};

export const loginUser = async (data) => {
  return apis.post("/login", data, {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};

export const logoutUser = async () => {
  return apis.get("/logout", {
    withCredentials: true,
  });
};

export const updateUser = async (data) => {
  return apis.put("/profile/update", data, {
    headers: {  'Content-Type': 'multipart/form-data' },
    withCredentials: true,
  });
};

