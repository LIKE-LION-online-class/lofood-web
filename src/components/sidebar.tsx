import { Box, Drawer, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { AppContext } from "../context/AppContext.tsx";
import React, { useContext } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = '100%';

const SideBar = () => {
  const { isOpen, toogleSideBar } = useContext(AppContext);
  if (!isOpen) {
    document.body.classList.remove('overflow-hidden');
    return null;
  } else {
    document.body.classList.add('overflow-hidden');
  }


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
        <Box className="headerSideBar" sx={{ textAlign: 'center', position: 'relative', borderBottom: '1px solid #ccc' }} pb={1} pt={1}>
          <img src="../src/assets/logo-sidebar.png" alt="logo-sidebar" />
          <IconButton className="btn-close-sidebar" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, position: 'absolute', top: '10px', left: '10px' }}
            onClick={toogleSideBar}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <Box className="contentSideBar" sx={{ padding: '16px' }}>
          <Box component="div" className="box-item" pb={2} sx={{ borderBottom: '1px solid #ccc' }} mb={2}>
            <Typography variant="h2" noWrap component="p" sx={{ paddingBottom: '5px' }}>
              <Button
                to={`/thuc-don`}
                color="inherit"
                component={Link}
                onClick={toogleSideBar}
              >
                Menu
              </Button>
            </Typography>
            <Typography variant="h2" noWrap component="p" sx={{ paddingBottom: '5px' }}>
              <Button
                to={`/he-thong-nha-hang`}
                color="inherit"
                component={Link}
                onClick={toogleSideBar}
              >
                List restaurant
              </Button>
            </Typography>
          </Box>
          <Box component="div" className="box-item" pb={2} sx={{ borderBottom: '1px solid #ccc' }} mb={2}>
            <Button
              to={'/auth/login'}
              color="inherit"
              component={Link}
              onClick={toogleSideBar}
            >
              Login
            </Button>
            <Button
              to={'/auth/register'}
              color="inherit"
              component={Link}
              onClick={toogleSideBar}
            >
              Register
            </Button>
          </Box>
          <Box component="div" className="box-item" pb={2} sx={{ borderBottom: '1px solid #ccc' }} mb={2}>
            <Typography component="h2" variant="h4" pb={2}>
              LIÊN HỆ KFC
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#uu-dai" className="sidebar-with-arrow" color="#202124">Theo dõi đơn hàng</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#mon-moi" className="sidebar-with-arrow" color="#202124">Liên hệ KFC</Link>
            </Typography>
          </Box>
          <Box component="div" className="box-item" pb={2} sx={{ borderBottom: '1px solid #ccc' }} mb={2}>
            <Typography component="h2" variant="h4" pb={2}>
              CHÍNH SÁCH
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#uu-dai" className="sidebar-with-arrow" color="#202124">Chính sách hoạt động</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#mon-moi" className="sidebar-with-arrow" color="#202124">Chính sách và quy định</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#mon-moi" className="sidebar-with-arrow" color="#202124">Chính sách bảo mật thông tin</Link>
            </Typography>
          </Box>
        </Box>
        <Box className="sideBarFooter" sx={{ height: '100px', backgroundColor: 'black', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="../src/assets/logo-sidebar-footer.png" alt="logo-sidebar-footer" />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;
