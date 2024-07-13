import axiosInstance from "./axios";

export const getCategoriesHttp = async () => {
  return axiosInstance.get('/category');
};
