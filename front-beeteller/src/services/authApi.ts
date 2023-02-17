import axios from 'axios';

export const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;
const authApi = axios.create({
  baseURL: AUTH_API_URL
});

authApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default authApi;
