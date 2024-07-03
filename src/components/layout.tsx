import React, { ReactNode } from 'react';
import { Toolbar, CssBaseline, Box } from '@mui/material';
import NavigationBar from './navigationbar';
import SideBar from './sidebar';
import {AppProvider} from "../context/AppContext.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppProvider>
      <Box sx={{ display: 'flex', height: '100vh',width:'100vm' }} bgcolor="#EDF2F7">
          <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Toolbar />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>{children}</Box>
          </Box>
      </Box>
    </AppProvider>
  );
};

export default Layout;
