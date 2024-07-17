import { Container, Grid } from '@mui/material';
import RestaurantHead from './components/RestaurantHead';
import ListSlide from '../HomePage/components/ListSlide';
import RestaurantHomeCate from './components/RestaurantHomeCate';
import RestaurantHomeFood from './components/RestaurantHomeFood';

function Page() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <RestaurantHead />
        <ListSlide />
        <RestaurantHomeCate />
        <RestaurantHomeFood />
      </Grid>
    </Container>
  );
}

export default Page;
