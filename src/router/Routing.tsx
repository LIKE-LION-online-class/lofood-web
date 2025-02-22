import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

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

const ProfilePage = lazy(() => import('@/pages/AccountPage/ProfilePage'));
const HistoryPage = lazy(() => import('@/pages/AccountPage/HistoryPage'));
const ChangePasswordPage = lazy(() => import('@/pages/AccountPage/ChangePasswordPage'));
const RestaurantPage = lazy(() => import('@/pages/RestaurantPage'));
const FoodPage = lazy(() => import('@/pages/FoodPage'));

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
    path: '/restaurant/:id',
    element: (
      <MainLayout header={<NavigationBar />}>
        <RestaurantPage />
      </MainLayout>
    ),
  },
  {
    path: '/food/:id',
    element: (
      <MainLayout header={<NavigationBar />}>
        <FoodPage />
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
    path: '/account/profile',
    element: (
      <MainLayout header={<NavigationBar />}>
        <ProfilePage />
      </MainLayout>
    ),
  },
  {
    path: '/account/history',
    element: <MainLayout header={<NavigationBar />}>{<HistoryPage />}</MainLayout>,
  },
  {
    path: '/account/password',
    element: <MainLayout header={<NavigationBar />}>{<ChangePasswordPage />}</MainLayout>,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default Routing;
