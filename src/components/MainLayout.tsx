import {Outlet} from "react-router-dom";
import NavigationBar from './navigationbar';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import SideBar from '@/components/sidebar.tsx';
import { AppProvider } from '@/context/AppContext.tsx';
const MainLayout = ()=>{
  return(
    <AppProvider>
      <Box>
        <NavigationBar/>
        <SideBar/>
        <Outlet/>
      </Box>
    </AppProvider>
  )
}

export default MainLayout;