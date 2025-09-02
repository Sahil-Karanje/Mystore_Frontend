import axios from "axios";

// const API_URL = "http://localhost:5000/api/auth"; // later your ASP.NET backend URL

export const login = async (credentials) => {
  // return await axios.post(`${API_URL}/login`, credentials);
  return {data: credentials};
};

export const register = async (userData) => {
  // return await axios.post(`${API_URL}/register`, userData);
  return {data: userData};
};

// export const getProfile = async (token) => {
//   return await axios.get(`${API_URL}/me`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
