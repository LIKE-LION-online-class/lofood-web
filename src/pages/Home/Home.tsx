import { Box, Container, Grid, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getRestaurantsHttp } from '@/apis/restaurant';
import { formatData } from '@/libs';
import RestaurantItem from '@/components/RestaurantItem';
import RestaurantCard from '@/components/RestaurantCard';

var settingsCarousel = {
  narrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
export default function Home() {
  const { data } = useQuery({
    queryKey: ['getRestaurants'],
    queryFn: getRestaurantsHttp,
  });

  const { results } = formatData(data);

  return (
    <>
      <img src="../src/assets/carousel.jpg" alt="BO" width={'100%'} height={'700vh'} />
      <Container>
        <Typography variant="h2" noWrap component="h2" my={4} className="heading-line" sx={{ position: 'relative' }}>
          <span>LIST RESTAURANT</span>
        </Typography>
        <Box className="box-khuyen-mai">
          <Box
            sx={{
              display: 'grid',
              gap: 4,
              gridTemplateColumns: 'repeat(4, 1fr)',
            }}
          >
            {results.map((restaurant: any) => (
              <Grid item xs={3}>
                <RestaurantItem restaurant={restaurant} />
              </Grid>
            ))}
          </Box>
        </Box>
      </Container>
      <Container className="box-do-you-want-like-this-food fix-button-slick">
        <Box my={6}>
          <Typography variant="h2" noWrap component="h2" my={4} className="heading-line" sx={{ position: 'relative' }}>
            <span>NEAR YOU</span>
          </Typography>
          <Slider {...settingsCarousel}>
            {results.map((restaurant: any) => (
              <Box p={1}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <RestaurantCard item={restaurant} />
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
      <img src="../src/assets/banner.png" alt="banner" width={'100%'} height={'500vh'} />
    </>
  );
}
