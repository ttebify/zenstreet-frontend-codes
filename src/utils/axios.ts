import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Accept"] = "application/json";
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.withCredentials = true;
// The server base URL
axiosInstance.defaults.baseURL = "http://localhost:3000/";
// Intercept outgoing request
axiosInstance.interceptors.request.use(
  (config) => {
    // console.log(config);
    return config;
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong!"
    )
);

// Intercept incoming request
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong!"
    )
);
export default axiosInstance;
