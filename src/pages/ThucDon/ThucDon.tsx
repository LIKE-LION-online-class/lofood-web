import React, { ReactNode } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link ,browserHistory} from 'react-router-dom';
import NewProductCard from '@/components/NewProductCard.tsx';
import Slider from 'react-slick';
import DanhMucMonAn from '@/components/DanhMucMonAn.tsx';

var settingsCarousel = {
  narrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1
};
const setLocation=(e)=>{
  e.preventDefault();
  window.history.pushState({}, '', '/dummy-page')
}

const ThucDon =() => {
  return (
        <Container maxWidth="lg" sx={{paddingTop:'100px'}}>
          <Box className="fix-button-slick" sx={{ overflow: 'hidden'}} my={6}>
            <Slider {...settingsCarousel}>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black' }} onClick={setLocation} rel='noopener noreferrer' >
                    Ưu đãi
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black' }} >
                    Món mới
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black'}}>
                    Combo 1 người
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black' }}>
                    Combo nhóm
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black' }}>
                    Gà Rán - Gà Quay
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black' }}>
                    Thức Ăn Nhẹ
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black' }}>
                    Burger - Cơm - Mì Ý
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link style={{ textDecoration: 'none', color: 'black' }}>
                    Thức Uống & Trang Miệng
                  </Link>
                </Typography>
              </Box>
            </Slider>
          </Box>
          <Box className="uu-dai" my={6} href="/uu-dai">
            <Typography variant="h2" noWrap component="h2" my={4} sx={{position:'relative'}}>
              <span>Ưu đãi</span>
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: 'repeat(4, 1fr)',
              }}
            >
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
            </Box>
          </Box>
          <Box className="mon-moi" my={6} href="/mon-moi">
            <Typography variant="h2" noWrap component="h2" my={4} sx={{position:'relative'}}>
              <span>Món Mới</span>
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: 'repeat(4, 1fr)',
              }}
            >
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
            </Box>
          </Box>
          <Box className="combo-one-people" my={6} href="/combo-one-nguoi">
            <Typography variant="h2" noWrap component="h2" my={4} sx={{position:'relative'}}>
              <span>Combo một người</span>
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gap: 4,
                gridTemplateColumns: 'repeat(4, 1fr)',
              }}
            >
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
                </Link>
              </Grid>
            </Box>
          </Box>
        </Container>

  );
};

export default ThucDon;
