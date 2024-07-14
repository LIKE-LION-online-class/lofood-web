import axiosInstance from './axios';

interface IGetIn5KmHttp {
  latitude: number;
  longitude: number;
}

export const getRestaurantsHttp = () => {
  return axiosInstance.get('/restaurant');
};

export const getIn5KmHttp = ({ latitude, longitude }: IGetIn5KmHttp) => {
  return axiosInstance.get(`/restaurant/in5kmLocation/${latitude}/${longitude}`);
};

export const getRestaurantByIdHttp = (id: string) => {
  return axiosInstance.get(`/restaurant/${id}`);
};

export const getRestaurantByCategoryIdHttp = (id: string) => {
  return axiosInstance.get(`/restaurant/category/${id}`);
};
