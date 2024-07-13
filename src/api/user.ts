import axiosInstance from './axios';

interface IUpdateUserHttp {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

interface IUpdatePasswordUserHttp {
  id: string;
  currentPassword: string;
  newPassword: string;
}

export const updateUserHttp = (data: IUpdateUserHttp) => {
  return axiosInstance.post('/user/update', data);
};

export const getUserByIdHttp = (id: string) => {
  return axiosInstance.get(`/user/findById/${id}`);
};

export const updatePasswordUserHttp = (data: IUpdatePasswordUserHttp) => {
  return axiosInstance.post('/user/updatePassword', data);
};
