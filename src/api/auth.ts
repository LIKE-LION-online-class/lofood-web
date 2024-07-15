import axiosInstance from './axios';

interface LoginData {
  username: string;
  password: string;
}

interface RegisterData {
  fullName: string;
  username: string;
  password: string;
  email: string;
  address: string;
  role: string;
}

interface ForgetPasswordData {
  email: string;
}

export const loginHttp = (data: LoginData) => {
  return axiosInstance.post('/security/login', data);
};

export const registerHttp = (data: RegisterData) => {
  return axiosInstance.post('/security/register', data);
};

export const forgetPasswordHttp = (data: ForgetPasswordData) => {
  return axiosInstance.post('/security/forgetPassword', data);
};
