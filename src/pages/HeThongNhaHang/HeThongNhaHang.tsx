import React, { ReactNode } from 'react';
import { Toolbar, Box } from '@mui/material';
import {AppProvider} from "@/context/AppContext.tsx";
import Search from '@/pages/SearchWithMap/Search';
import Layout from '@/components/layout';


const HeThongNhaHang =() => {
  return (
    <AppProvider>
      <Box sx={{height: '100vh',width:'100vm' }} bgcolor="#EDF2F7">
          <Layout>
            <Search />
          </Layout>
      </Box>
    </AppProvider>
  );
};

export default HeThongNhaHang;
