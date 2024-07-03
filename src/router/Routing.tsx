import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import HeThongNhaHang from '@/pages/HeThongNhaHang/HeThongNhaHang';
import Home from '@/pages/Home/Home';
import MainLayout from '@/components/MainLayout';
import {Outlet, createBrowserRouter,RouteObject} from "react-router-dom";
import ThucDon from '@/pages/ThucDon/ThucDon.tsx';
import GioHang from '@/pages/GioHang/GioHang.tsx';

const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: '/thuc-don',
        element:<ThucDon />
      },
      {
        path: '/he-thong-nha-hang',
        element: <HeThongNhaHang />
      },
      {
        path: '/gio-hang',
        element: <GioHang />
      },
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  }
];
const Routing = createBrowserRouter([
  {
    element:(
      <Outlet/>
    ),
    children:appRoutes
  }
])


export default Routing;
