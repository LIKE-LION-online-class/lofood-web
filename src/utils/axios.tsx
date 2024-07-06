import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import React from 'react';

const instance = axios.create({
  baseURL: 'http://localhost:8083/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiClientProvider = ({ children }: { children: React.ReactElement }) => {
  const navigate = useNavigate();
  const location = useLocation();

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      switch (status) {
        case 401:
          if (location.pathname !== '/auth/login') {
            // toast.error('please login');
            navigate('/auth/login');
            break;
          }
      }
      return Promise.reject(error);
    },
  );
  return <>{children}</>;
};

export default instance;
