// src/api/axiosInstance.ts
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Tạo instance chung
const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // trả về data thôi, đỡ phải response.data mỗi lần
  },
  (error: AxiosError) => {
    if (error.response) {
      // Xử lý lỗi chung
      if (error.response.status === 401) {
        console.warn("Unauthorized! Redirecting to login...");
        // Ví dụ: logout hoặc redirect
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
