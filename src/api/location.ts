import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_OPENCAGEDATA_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAddressHttp = async (q: string) => {
  return axiosInstance.get('/geocode/v1/json', {
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      key: import.meta.env.VITE_OPENCAGEDATA_KEY,
      q,
    },
  });
};
