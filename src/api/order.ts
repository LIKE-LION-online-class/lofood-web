import axiosInstance from './axios';

interface IOrderRequest {
  foodOrderRequests: {
    foodId: string;
    priceOrder: number;
    quantity: number;
  }[];
  note?: string;
  address?: string;
  status: string;
  totalPrice: number;
}

export const orderHistoryHttp = () => {
  return axiosInstance.post('/order/getOrderUserLogged');
};

export const createOrderHttp = (data: IOrderRequest) => {
  return axiosInstance.post('/order', data);
};

export const getOrderByIdHttp = (id: string) => {
  return axiosInstance.get(`/order/${id}`);
};

export const cancelOrderHttp = (id: string) => {
  return axiosInstance.put(`/order/cancel/${id}`);
};

export const getOrderUserLogged = () => {
  return axiosInstance.get('/order/getOrderUserLogged');
};
