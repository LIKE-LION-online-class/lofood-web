import { Box, Container, Grid, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getIn5KmHttp, getRestaurantsHttp } from '@/apis/restaurant';
import { formatData } from '@/libs/index';
import RestaurantItem from '@/components/RestaurantItem';
import RestaurantCard from '@/components/RestaurantCard';
import { useSelector } from 'react-redux';

var settingsCarousel = {
  narrow: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
export default function Home() {
  const { data: restaurantsData } = useQuery({
    queryKey: ['getRestaurants'],
    queryFn: getRestaurantsHttp,
  });

  const { results: resultRestaurant } = formatData(restaurantsData);

  const location = useSelector((state) => state?.location);

  const { latitude, longitude } = location;

  const { data: in5kmData } = useQuery({
    queryKey: ['getIn5Km', latitude, longitude],
    queryFn: () =>
      getIn5KmHttp({
        latitude,
        longitude,
      }),
    enabled: !!location && !!location.latitude && !!location.longitude,
  });

  const { results: resultIn5km } = formatData(in5kmData);

  return (
    <>
      <img src="/assets/carousel.jpg" alt="BO" width={'100%'} height={'700vh'} />
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
            {resultRestaurant.map((restaurant: any) => (
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
            {resultIn5km?.map((restaurant: any) => (
              <Box p={1}>
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <RestaurantCard item={restaurant} />
                </Link>
                Distance: {restaurant?.distance}km
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
      <img src="/assets/banner.png" alt="banner" width={'100%'} height={'500vh'} />
    </>
  );
}
