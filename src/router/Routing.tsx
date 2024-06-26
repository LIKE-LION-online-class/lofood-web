import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import HeThongNhaHang from '@/pages/HeThongNhaHang/HeThongNhaHang';
import Home from '@/pages/Home/Home';
import Search from '@/pages/SearchWithMap/Search';
import Layout from '@/components/layout';
import MainLayout from '@/components/MainLayout';
import {Outlet, createBrowserRouter,RouteObject} from "react-router-dom";

const appRoutes: RouteObject[] = [
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:'/he-thong-nha-hang',
        element:<HeThongNhaHang />
      },
      {
        path:'/auth/login',
        element:<Login />
      },
      {
        path:'/auth/register',
        element:<Register />
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
