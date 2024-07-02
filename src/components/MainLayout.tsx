import {Outlet} from "react-router-dom";
import NavigationBar from './navigationbar';
import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import SideBar from '@/components/sidebar.tsx';
import { AppProvider } from '@/context/AppContext.tsx';
import Footer from '@/components/footer.tsx';
const MainLayout = ()=>{
  const scrollTop=()=>{
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  return(
    <AppProvider>
      <Box>
        <NavigationBar/>
        <SideBar/>
        <Outlet/>
        <IconButton  className="scrollTop" color="primary" variant={'contained'} disableRipple size={'medium'} sx={{position:'fixed',bottom:'10%',right:'5%'}} onClick={scrollTop}>
          <i className="icon-scroll-top"></i>
        </IconButton >
        <Footer/>
      </Box>
    </AppProvider>
  )
}

export default MainLayout;