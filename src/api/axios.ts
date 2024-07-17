import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const refreshToken = async () => {
  const token = localStorage.getItem('refresh_token');
  const data = await axiosInstance.post('/security/refreshToken', {
    refreshToken: token,
  });
  localStorage.setItem('access_token', data.data.token);
  localStorage.setItem('refresh_token', data.data.refreshToken);
};

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
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
      localStorage.removeItem('access_token');
      refreshToken();
    }
  },
);

export default axiosInstance;
