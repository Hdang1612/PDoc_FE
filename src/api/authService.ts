import axiosInstance from '../api/axiosInstance';
import { AuthResponse, User } from '../interface/user';

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginService = async (payload: { email: string; password: string }): Promise<AuthResponse> => {
  const res = await axiosInstance.post('/auth/login', payload);
  return res.data;
};

export const getProfileService = async (): Promise<User> => {
  const res = await axiosInstance.get('/auth/me');
  return res.data;
};

export const logoutService = async (): Promise<void> => {
  await axiosInstance.post('/auth/logout');
};
export const refreshTokenService = (refreshToken: string) => {
  return axiosInstance.post('/auth/refresh', { refreshToken });
};
