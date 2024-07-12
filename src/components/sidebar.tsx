import { Box, Drawer, Button, IconButton, Toolbar, Typography, Stack } from '@mui/material';
import { AppContext } from '../context/AppContext.tsx';
import React, { useContext } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Food } from '@/model/Food';
import { useSelector } from 'react-redux';

const drawerWidth = '100%';

const SideBar = () => {
  const { isOpen, toogleSideBar } = useContext(AppContext);
  if (!isOpen) {
    document.body.classList.remove('overflow-hidden');
    return null;
  } else {
    document.body.classList.add('overflow-hidden');
  }
  const cart: Food[] = useSelector((state) => state?.cart?.CartArr);
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        display: { md: 'none' },
        position: 'fixed',
        zIndex: 9999999,
        width: drawerWidth,
        overflowX: 'hidden',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }} className="sideBarRight">
        <Box
          className="headerSideBar"
          sx={{ textAlign: 'center', position: 'relative', borderBottom: '1px solid #ccc' }}
          pb={1}
          pt={1}
        >
          <img src="/assets/logo-sidebar.png" alt="logo-sidebar" />
          <IconButton
            className="btn-close-sidebar"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, position: 'absolute', top: '10px', left: '10px' }}
            onClick={toogleSideBar}
          >
            <CloseOutlinedIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ position: 'absolute', top: '10px', right: '20px' }}>
            <Link
              to={`/gio-hang`}
              style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}
              className="mat-pripple basket"
            >
              {cart.length}
            </Link>
          </Typography>
        </Box>
        <Box className="contentSideBar" sx={{ padding: '16px' }}>
          <Box component="div" className="box-item" pb={2} sx={{ borderBottom: '1px solid #ccc' }} mb={2}>
            <Typography variant='h2' component={'h2'} mb={1}>
              Begin
            </Typography>
            <Button to={'/auth/login'} color="inherit" component={Link} onClick={toogleSideBar} sx={{ paddingLeft: '0' }}>
              Login
            </Button>
            <Button to={'/auth/register'} color="inherit" component={Link} onClick={toogleSideBar}>
              Register
            </Button>
          </Box>
          <Box component="div" className="box-item" pb={2} sx={{ borderBottom: '1px solid #ccc' }} mb={2}>
            <Stack sx={{ alignItems: 'flex-start', flexDirection: 'column' }}>
              <Button
                to={'/thucdon'}
                color="inherit"
                component={Link}
                onClick={toogleSideBar}
                sx={{ fontSize: 0, padding: 0, paddingLeft: '10px', fontWeight: 'bold', display: 'flex', width: '100%', justifyContent: 'space-between', bgcolor: '#f8f7f5', marginBottom: '20px' }}
              >
                <span style={{ fontSize: '17px' }}>
                  Menu
                </span>
                <img src='/assets/img-menu.png' alt='img-menu' />
              </Button>
              <Button
                to={'/he-thong-nha-hang'}
                color="inherit"
                component={Link}
                onClick={toogleSideBar}
                sx={{ fontSize: 0, padding: 0, paddingLeft: '10px', fontWeight: 'bold', display: 'flex', width: '100%', justifyContent: 'space-between', bgcolor: '#f8f7f5', marginBottom: '20px' }}
              >
                <span style={{ fontSize: '17px' }}>
                  Restaurant
                </span>
                <img src='/assets/img-menu.png' alt='img-menu' />
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          className="sideBarFooter"
          sx={{
            height: '100px',
            backgroundColor: 'black',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/assets/logo-sidebar-footer.png" alt="logo-sidebar-footer" />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;