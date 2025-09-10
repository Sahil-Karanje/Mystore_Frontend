import axios from "axios";

const API_URL = "https://localhost:7007/api/auth"; 

export const login = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register?password=${userData.Password}`, userData);
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};

// export const getProfile = async (token) => {
//   return await axios.get(`${API_URL}/me`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };