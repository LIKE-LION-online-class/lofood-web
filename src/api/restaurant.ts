import axiosInstance from './axios';

interface INearestLocation {
  displayRadius?: number;
  latitude?: number;
  longitude?: number;
  pageSize?: number;
}

export const getRestaurantsHttp = () => {
  return axiosInstance.get('/restaurant');
};

export const getNearestLocationHttp = (data: INearestLocation) => {
  return axiosInstance.post('/restaurant/nearestLocation', data);
};

export const getRestaurantByIdHttp = (id: string) => {
  return axiosInstance.get(`/restaurant/${id}`);
};

export const getRestaurantByCategoryIdHttp = (id: string) => {
  return axiosInstance.get(`/restaurant/category/${id}`);
};

export const searchRestaurantHttp = (query: string) => {
  return axiosInstance.get(`/restaurant/search?query=${query}`);
};
