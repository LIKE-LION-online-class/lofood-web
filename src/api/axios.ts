import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshToken = async () => {
  const token = localStorage.getItem('refresh_token');
  if (token != null) {
    const response = await axiosInstance.post('/auth/refreshToken', {
      refreshToken: JSON.parse(token as string),
    });
    localStorage.setItem('token', JSON.stringify(response.data.accessToken));
    localStorage.setItem('refresh_token', JSON.stringify(response.data.refreshToken));
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token != null) {
      config.headers.Authorization = `Bearer ${JSON.parse(token as string)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return refreshToken();
    }
  },
);

export default axiosInstance;
