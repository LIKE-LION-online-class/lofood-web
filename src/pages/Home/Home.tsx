import SearchInput from '@/components/SearchInput';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import DanhMucMonAn from '@/components/DanhMucMonAn.tsx';
import { Link } from 'react-router-dom';
import NewProductCard from '@/components/NewProductCard.tsx';
var settings = {
  narrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
var settingsCarousel = {
  narrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1
};
export default function Home() {
  return (
    <>
      <Box className="home-silder fix-button-slick" sx={{ overflow: 'hidden'}} mb={6}>
        <Slider {...settings}>
          <Box>
            <img src="../src/assets/BO.jpg" alt="BO"/>
          </Box>
          <Box>
            <img src="../src/assets/combo88k.jpg" alt="combo88k" />
          </Box>
          <Box>
            <img src="../src/assets/Dinner.jpg" alt='Dinner'/>
          </Box>
        </Slider>
      </Box>
      <Container>
        <Typography variant="h2" noWrap component="h2" my={4} className="heading-line" sx={{position:'relative'}}>
          <span>DANH MỤC MÓN ĂN</span>
        </Typography>
        <Box className="box-khuyen-mai" >
          <Box
               sx={{
                 display: 'grid',
                 gap: 4,
                 gridTemplateColumns: 'repeat(4, 1fr)',
               }}
          >
            <Grid item xs={3}>
              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <DanhMucMonAn image="../src/assets/KHUYEN MAI.jpg" text="Ưu Đãi"/>
              </Link>
            </Grid>
            <Grid item xs={3}>
              <DanhMucMonAn image="../src/assets/MON MOI.jpg" text="Món Mới"/>
            </Grid>
            <Grid item xs={3}>
              <DanhMucMonAn image="../src/assets/COMBO 1 NGUOI.jpg" text="Combo 1 Người"/>
            </Grid>
            <Grid item xs={3}>
              <DanhMucMonAn image="../src/assets/COMBO NHOM.jpg" text="Combo Nhóm"/>
            </Grid>
            <Grid item xs={3}>
              <DanhMucMonAn image="../src/assets/GA.jpg" text="Gà Rán - Gà Quay"/>
            </Grid>
            <Grid item xs={3}>
              <DanhMucMonAn image="../src/assets/COM.jpg" text="Burger - Cơm - Mì Ý"/>
            </Grid>
            <Grid item xs={3}>
              <DanhMucMonAn image="../src/assets/MON AN NHE.jpg" text="Thức Ăn Nhẹ"/>
            </Grid>
            <Grid item xs={3}>
              <DanhMucMonAn image="../src/assets/TRANG MIENG.jpg" text="Thức Uống & Tráng Miệng"/>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Container className="box-do-you-want-like-this-food fix-button-slick">
        <Box my={6}>
          <Typography variant="h2" noWrap component="h2" my={4} className="heading-line" sx={{position:'relative'}}>
            <span>CÓ THỂ BẠN SẼ THÍCH MÓN NÀY</span>
          </Typography>
          <Slider {...settingsCarousel}>
            <Box p={1}>
              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
              </Link>
            </Box>
            <Box p={1}>
              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
              </Link>
            </Box>
            <Box p={1}>
              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
              </Link>
            </Box>
            <Box p={1}>
              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
              </Link>
            </Box>
            <Box p={1}>
              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <NewProductCard image="../src/assets/COMBO NHOM.jpg" text="Ưu Đãi"/>
              </Link>
            </Box>
          </Slider>
        </Box>
      </Container>
      <Box sx={{overflow:'hidden'}}>
        <img src="../src/assets/banner.jpg" alt='banner'/>
      </Box>
    </>

  );
}
