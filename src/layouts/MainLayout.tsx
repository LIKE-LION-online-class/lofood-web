import { Box } from '@mui/material';
import React from 'react';

interface MainLayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const MainLayout = ({ header, sidebar, footer, children }: MainLayoutProps) => {
  return (
    <React.Fragment>
      {header}
      {sidebar}
      <Box bgcolor="#F5F5FA" minHeight="100vh" mt="64px" pb={10}>
        {children}
      </Box>
      {footer}
    </React.Fragment>
  );
};

export default MainLayout;
