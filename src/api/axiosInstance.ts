// src/api/axiosInstance.ts
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { tokenService } from '../utils/tokens';
import { showError } from '@/utils/toast';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string) => void; reject: (err: any) => void }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });
  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = tokenService.getAccess();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };
    if (error.code === 'ECONNABORTED') {
      showError('Yêu cầu quá thời gian, vui lòng thử lại sau.');
      return Promise.reject(error);
    }
    // Nếu lỗi 401 và chưa retry -> thử refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = tokenService.getRefresh();
      if (!refreshToken) {
        console.warn('No refresh token');
        tokenService.clear();
        window.location.href = '/login';
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((newToken) => {
            originalRequest.headers = {
              ...originalRequest.headers,
              Authorization: `Bearer ${newToken}`,
            };
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      isRefreshing = true;

      try {
        const res = await axios.post(`${API_URL}/auth/refresh`, { refreshToken });

        const newAccessToken = res.data?.accessToken;
        const newRefreshToken = res.data?.refreshToken || refreshToken;

        tokenService.setAccess(newAccessToken);
        tokenService.setRefresh(newRefreshToken);

        processQueue(null, newAccessToken);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        tokenService.clear();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    if (error.response) {
      const status = error.response.status;
      const msg = (error.response.data as any)?.message;

      switch (status) {
        case 400:
          showError(msg || 'Yêu cầu không hợp lệ');
          break;
        case 403:
          showError('Bạn không có quyền thực hiện hành động này');
          break;
        case 404:
          showError('Không tìm thấy dữ liệu');
          break;
        case 500:
          showError('Lỗi server, vui lòng thử lại sau');
          break;
        default:
          showError(msg || 'Có lỗi xảy ra');
      }
    } else {
      showError('Không thể kết nối tới server');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
