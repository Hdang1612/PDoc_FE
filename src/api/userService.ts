import axiosInstance from './axiosInstance';

export const getUsers = (params?: any) => {
  return axiosInstance.get('/users', { params });
};

export const getUserById = (id: string | number) => {
  return axiosInstance.get(`/users/${id}`);
};

export const createUser = (data: any) => {
  return axiosInstance.post('/users', data);
};

export const updateUser = (id: string | number, data: any) => {
  return axiosInstance.put(`/users/${id}`, data);
};

export const deleteUser = (id: string | number) => {
  return axiosInstance.delete(`/users/${id}`);
};
