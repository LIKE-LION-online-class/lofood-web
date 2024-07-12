import { Box, Container, Grid, Typography } from '@mui/material';
import NewProductCard from '@/components/NewProductCard.tsx';
import Slider from 'react-slick';
import Link from '@mui/material/Link';
// import DanhMucMonAn from '@/components/DanhMucMonAn.tsx';
// import { foodArr } from '@/redux/foodList';
import { useEffect, useState } from 'react';
import instance from '@/utils/axios';
import { useSelector } from 'react-redux';

var settingsCarousel = {
  narrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
};
let currentLink;
const scrollNavigation = (e) => {
  currentLink = e.currentTarget.getAttribute('href');
  // @ts-ignore
  var getOffsetTop = document.getElementById(currentLink.slice(1)).offsetTop;
  document.querySelectorAll('.boxNarrowMenu a').forEach((e) => {
    e.classList.remove('active');
  });
  e.target.classList.add('active');
  // @ts-ignore
  document.querySelector('body').addEventListener('scroll', (event) => {
    console.log('event', event);
    `scrollTop: ${getOffsetTop}`;
  });
};
document.addEventListener('load', (e) => {
  document.querySelectorAll('.boxNarrowMenu a').forEach((e) => {
    e.classList.remove('active');
  });
});
const ThucDon = () => {
  const [foods, setFoods] = useState<[]>([]);
  const [categories, setCategories] = useState<[]>([]);
  const restaurantID = useSelector((state) => state?.restaurant?.restaurantId);

  useEffect(() => {
    const fetchDataFood = async () => {
      await instance
        .get(`/food/restaurant/${restaurantID}`)
        .then((res) => {
          setFoods(res.data);
        })
        .catch(() => {
          throw new Error('Failed to get food');
        });
    };
    const fetchData = async () => {
      await instance
        .get(`/category/${restaurantID}/restaurant`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch(() => {
          throw new Error('Failed to get category');
        });
    };
    fetchDataFood();
    fetchData();
  }, [restaurantID]);

  const selecteCategory = async (id: any) => {
    await instance
      .get(`/food/category/${id}`)
      .then((res) => {
        setFoods(res.data);
      })
      .catch(() => {
        throw new Error('Failed to get food by category');
      });
  };

  return (
    <Container>
      <Box
        className="fix-button-slick boxNarrowMenu"
        sx={{ overflow: 'hidden', borderBottom: '1px solid #ccc' }}
        mb={3}
      >
        <Slider {...settingsCarousel}>
          <Box p={1}>
            <Typography variant="h6" noWrap component="div" textAlign="center">
              <Link
                href="#mon-moi"
                underline="none"
                style={{ textDecoration: 'none', color: 'black', paddingBottom: '5px' }}
                onClick={scrollNavigation}
              >
                {/* Món mới */}
              </Link>
            </Typography>
          </Box>
          {categories.map((category: any) => (
            <Box p={1}>
              <Typography variant="h6" noWrap component="div" textAlign="center">
                <Link
                  href="#mon-moi"
                  underline="none"
                  style={{ textDecoration: 'none', color: 'black', paddingBottom: '5px' }}
                  onClick={() => {
                    selecteCategory(category?.id);
                  }}
                >
                  {category?.name}
                </Link>
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box className="uu-dai" mb={2} id="uu-dai">
        <Typography variant="h2" noWrap component="h2" mb={2} sx={{ position: 'relative' }}>
          <span></span>
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          {foods.map((food) => (
            <Grid item xs={3}>
              <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                <NewProductCard item={food} text="Ưu Đãi" />
              </Link>
            </Grid>
          ))}
          {/* <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid> */}
        </Box>
      </Box>
      {/* <Box className="mon-moi" my={6} id="mon-moi">
        <Typography variant="h2" noWrap component="h2" my={4} sx={{ position: 'relative' }}>
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
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
        </Box>
      </Box>
      <Box className="combo-one-people" my={6} id="combo-1-nguoi">
        <Typography variant="h2" noWrap component="h2" my={4} sx={{ position: 'relative' }}>
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
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
              <NewProductCard image="/assets/COMBO NHOM.jpg" text="Ưu Đãi" />
            </Link>
          </Grid>
        </Box>
      </Box> */}
    </Container>
  );
};

export default ThucDon;
