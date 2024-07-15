import axiosInstance from './axios';

export const getFoodHttp = () => {
  return axiosInstance.get('/food');
};

export const getFoodByCategoryHttp = (id: string) => {
  return axiosInstance.get(`/food/category/${id}`);
};

export const getFoodByIdHttp = (id: string) => {
  return axiosInstance.get(`/food/${id}`);
};

export const getFoodByRestaurantIdHttp = (id: string) => {
  return axiosInstance.get(`/food/restaurant/${id}`);
};
