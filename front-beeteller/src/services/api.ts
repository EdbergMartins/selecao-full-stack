import axios from 'axios';

export const API_URL = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: API_URL
});

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
