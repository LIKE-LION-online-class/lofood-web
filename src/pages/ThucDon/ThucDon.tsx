import React, { ReactNode } from 'react';
import { Box, Container, Grid, Stack, Typography ,AppBar} from '@mui/material';
import NewProductCard from '@/components/NewProductCard.tsx';
import Slider from 'react-slick';
import Link from '@mui/material/Link';
import { array } from 'yup';


var settingsCarousel = {
  narrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1
};
let currentLink;
const scrollNavigation = (e)=>{
  currentLink = e.currentTarget.getAttribute('href');
  // @ts-ignore
  var getOffsetTop= document.getElementById(currentLink.slice(1)).offsetTop;
  document.querySelectorAll(".boxNarrowMenu a").forEach((e)=>{
    e.classList.remove('active');
  })
  e.target.classList.add('active');
  document.getElementById('NavThucDon').classList.add('active');
  console.log('getOffsetTop', getOffsetTop);
}
document.addEventListener("load",(e)=>{
  document.querySelectorAll(".boxNarrowMenu a").forEach((e)=>{
    e.classList.remove('active');
  });
})

document.addEventListener('scroll', function(e) {
if(window.scrollY<100){
  document.getElementById('NavThucDon').classList.remove('active');
}else{
  document.getElementById('NavThucDon').classList.add('active');
  if(window.scrollY < 224){
    document.querySelector(' a[href="#mon-moi"] ').classList.remove('active');
    document.querySelector(' a[href="#uu-dai"] ').classList.add('active');
  }else {
    if(224 >window.scrollY < 727){
      document.querySelector(' a[href="#uu-dai"] ').classList.remove('active');
      document.querySelector(' a[href="#mon-moi"] ').classList.add('active');
    }
  }
}


});

const ThucDon =() => {
  return (
    <Box className="box-food">
      <AppBar id="NavThucDon" position="relative" sx={{ height:'110px',justifyContent:'center' }} elevation={0}>
        <Container>
          <Box className="fix-button-slick boxNarrowMenu" sx={{ overflow: 'hidden',borderBottom:'1px solid #ccc'}} mb={3}>
            <Slider {...settingsCarousel}>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link id="boxNarrowMenuFirst" href="#uu-dai" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px' }}  onClick={scrollNavigation}>
                    Ưu đãi
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link  href="#mon-moi" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px' }} onClick={scrollNavigation}>
                    Món mới
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link  href="#combo-1-nguoi" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px'}} onClick={scrollNavigation}>
                    Combo 1 người
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link  href="#combo-nhom" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px' }}>
                    Combo nhóm
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link  href="#ga-ran-ga-quay" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px' }}>
                    Gà Rán - Gà Quay
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link  href="#thuc-an-nhe" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px' }}>
                    Thức Ăn Nhẹ
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link  href="#burger-com-mi-y" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px' }}>
                    Burger - Cơm - Mì Ý
                  </Link>
                </Typography>
              </Box>
              <Box p={1}>
                <Typography variant="h6" noWrap component="div" textAlign="center">
                  <Link  href="#thuc-uong-trang-mieng" underline="none" style={{ textDecoration: 'none', color: 'black',paddingBottom:'5px' }}>
                    Thức Uống & Trang Miệng
                  </Link>
                </Typography>
              </Box>
            </Slider>
          </Box>
        </Container>
      </AppBar>
      <Container>
        <Box className="uu-dai" mb={2} id="uu-dai">
          <Typography variant="h2" noWrap component="h2" mb={2} sx={{position:'relative'}}>
            <span>Ưu đãi</span>
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
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
        <Box className="mon-moi" my={6} id="mon-moi">
          <Typography variant="h2" noWrap component="h2" my={4} sx={{position:'relative'}}>
            <span>Món Mới</span>
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
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
        <Box className="combo-one-people" my={6} id="combo-1-nguoi">
          <Typography variant="h2" noWrap component="h2" my={4} sx={{position:'relative'}}>
            <span>Combo một người</span>
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
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

    </Box>

  );
};

export default ThucDon;
