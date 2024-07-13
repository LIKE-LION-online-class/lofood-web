import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import NavigationBar from '@/layouts/Header/NavigationBar';
import MainLayout from '@/layouts/MainLayout';

const MapPage = lazy(() => import('@/pages/MapPage'));
const HomePage = lazy(() => import('@/pages/HomePage'));
const LoginPage = lazy(() => import('@/pages/AuthPage/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/AuthPage/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/AuthPage/ForgotPasswordPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const CategoryPage = lazy(() => import('@/pages/CategoryPage'));
const CartPage = lazy(() => import('@/pages/CartPage'));
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));
const OrderSuccessPage = lazy(() => import('@/pages/OrderPage/OrderSuccessPage'));

const AccountPage = lazy(() => import('@/pages/AccountPage'));
const ProfilePage = lazy(() => import('@/pages/AccountPage/ProfilePage'));
const HistoryPage = lazy(() => import('@/pages/AccountPage/HistoryPage'));
const ChangePasswordPage = lazy(() => import('@/pages/AccountPage/ChangePasswordPage'));

const Routing = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout header={<NavigationBar />}>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: '/category/:id',
    element: (
      <MainLayout header={<NavigationBar />}>
        <CategoryPage />
      </MainLayout>
    ),
  },
  {
    path: '/cart',
    element: (
      <MainLayout header={<NavigationBar />}>
        <CartPage />
      </MainLayout>
    ),
  },
  {
    path: '/checkout',
    element: (
      <MainLayout header={<NavigationBar />}>
        <CheckoutPage />
      </MainLayout>
    ),
  },
  {
    path: '/order/success/:id',
    element: (
      <MainLayout header={<NavigationBar />}>
        <OrderSuccessPage />
      </MainLayout>
    ),
  },
  {
    path: '/map',
    element: <MapPage />,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
  {
    path: '/auth/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/account',
    element: (
      <MainLayout header={<NavigationBar />}>
        <AccountPage />
      </MainLayout>
    ),
    children: [
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
      {
        path: 'password',
        element: <ChangePasswordPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default Routing;
