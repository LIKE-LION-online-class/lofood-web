import axiosInstance from './axios';

export const getCategoriesHttp = async () => {
  return axiosInstance.get('/category');
};

export const getCategoryByIdHttp = async (id: string) => {
  return axiosInstance.get(`/category/${id}`);
};

export const getCategoriesByRestaurantIdHttp = async (id: string) => {
  return axiosInstance.get(`/category/${id}/restaurant`);
};
