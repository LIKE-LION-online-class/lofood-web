import axiosInstance from './axios';

interface IOrderRequest {
  foodOrderRequests: {
    foodId: string;
    priceOrder: number;
    quantity: number;
  }[];
  status: string;
  totalPrice: number;
}

export const orderHistoryHttp = () => {
  return axiosInstance.post('/order/getOrderUserLogged');
};

export const createOrderHttp = (data: IOrderRequest) => {
  return axiosInstance.post('/order', data);
};

export const updateOrderStatusHttp = (id: string, status: string) => {
  return axiosInstance.post(`/order/updateStatus/${id}/${status}`);
};

export const getOrderByIdHttp = (id: string) => {
  return axiosInstance.get(`/order/${id}`);
};
