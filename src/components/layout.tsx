import React, { ReactNode } from 'react';
import { Toolbar, CssBaseline, Box } from '@mui/material';
import NavigationBar from './navigationbar';
// import SideBar from './sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }} bgcolor="#EDF2F7">
      <CssBaseline />
      <NavigationBar />
      {/* <SideBar /> */}
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Toolbar />
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
