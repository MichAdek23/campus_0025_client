import axios from "axios";
import { auth } from "../firebase";

const API_BASE_URL = "https://campus-0025-backend.onrender.com/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Attach Firebase Token to Every Request
api.interceptors.request.use(async (config) => {
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
