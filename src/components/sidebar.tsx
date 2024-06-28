import { Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import {AppContext} from "../context/AppContext.tsx";
import React, {useContext} from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from '@mui/material/Link';
const drawerWidth = 300;

const SideBar = () => {
  const{isOpen,toogleSideBar}= useContext(AppContext);
  if(!isOpen) {
    document.body.classList.remove('overflow-hidden');
    return null;
  }else {
    document.body.classList.add('overflow-hidden');
  }


  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        position: 'fixed',
        zIndex:9999999,
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }} className="sideBarRight">
        <Box className="headerSideBar" sx={{textAlign:'center',position:'relative',borderBottom:'1px solid #ccc'}} pb={1} pt={1}>
          <img src="../src/assets/logo-sidebar.png" alt="logo-sidebar"/>
          <IconButton className="btn-close-sidebar" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 , position:'absolute',top:'10px',right:0}}
                      onClick={toogleSideBar}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <Box className="contentSideBar" sx={{padding:'16px'}}>
          <Box component="div" className="box-item" pb={2} sx={{borderBottom:'1px solid #ccc'}} mb={2}>
            <Typography component="h2" variant="h4" pb={2}>
              DANH MỤC MÓN ĂN
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#uu-dai" className="sidebar-with-arrow" color="#202124">Ưu Đãi</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#mon-moi" className="sidebar-with-arrow" color="#202124">Món Mới</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#combo-one-people" className="sidebar-with-arrow" color="#202124">Combo 1 Người</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#combo-nhom" className="sidebar-with-arrow" color="#202124">Combo Nhóm</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#ga-ran-ga-quay" className="sidebar-with-arrow" color="#202124">Gà Rán - Gà Quay</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#burger-com-mi-y" className="sidebar-with-arrow" color="#202124">Burger - Cơm - Mì Ý</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#thuc-an-nhe" className="sidebar-with-arrow" color="#202124">Thức Ăn Nhẹ</Link>
            </Typography>
            <Typography component="p" variant="p">
              <Link href="#thuc-uong-trang-mieng" className="sidebar-with-arrow" color="#202124">Thức Uống & Tráng Miệng</Link>
            </Typography>
          </Box>
          <Box component="div" className="box-item" pb={2} sx={{borderBottom:'1px solid #ccc'}} mb={2}>
            <Typography component="h2" variant="h4" pb={2}>
              VỀ KFC
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#uu-dai" className="sidebar-with-arrow" color="#202124">Câu Chuyện Của Chúng Tôi</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#mon-moi" className="sidebar-with-arrow" color="#202124">Tin Khuyến Mãi</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#combo-one-people" className="sidebar-with-arrow" color="#202124">Tin Khuyến Mãi</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#combo-nhom" className="sidebar-with-arrow" color="#202124">Tin tức KFC</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#ga-ran-ga-quay" className="sidebar-with-arrow" color="#202124">Tuyển dụng</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#burger-com-mi-y" className="sidebar-with-arrow" color="#202124">Đặt tiệc Sinh nhật</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#thuc-an-nhe" className="sidebar-with-arrow" color="#202124">Thức Ăn Nhẹ</Link>
            </Typography>
            <Typography component="p" variant="p" pb={1}>
              <Link href="#thuc-uong-trang-mieng" className="sidebar-with-arrow" color="#202124">Thức Uống & Tráng Miệng</Link>
            </Typography>
          </Box>
          <Box component="div" className="box-item" pb={2} sx={{borderBottom:'1px solid #ccc'}} mb={2}>
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
          <Box component="div" className="box-item" pb={2} sx={{borderBottom:'1px solid #ccc'}} mb={2}>
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
        <Box className="sideBarFooter" sx={{ height: '100px', backgroundColor: 'black',textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>

          <img  src="../src/assets/logo-sidebar-footer.png" alt="logo-sidebar-footer" />
        </Box>
      </Box>
    </Drawer>
  );
};

export default SideBar;
