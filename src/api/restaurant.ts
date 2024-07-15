import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axios';


export const getRestaurantsHttp = () => {
  return axiosInstance.get('/restaurant');
};

export const getRestaurantNearestLocation = (data : any) => {
  return axiosInstance.post(`/restaurant/nearestLocation`, data);
};

export const getRestaurantByIdHttp = (id: string) => {
  return axiosInstance.get(`/restaurant/${id}`);
};

export const getRestaurantByCategoryIdHttp = (id: string) => {
  return axiosInstance.get(`/restaurant/category/${id}`);
};
