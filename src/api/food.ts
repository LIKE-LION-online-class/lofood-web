import axiosInstance from "./axios";

export const getFoodHttp = () => {
  return axiosInstance.get('/food');
};

export const getFoodByCategoryHttp = (id: string) => {
  return axiosInstance.get(`/food/category/${id}`);
};
