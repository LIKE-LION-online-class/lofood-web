import { Container, Grid } from '@mui/material';
import Promo from '../HomePage/components/Promo';
import ListFoodByCate from './components/ListSearchRestaurant';

function Page() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={2}>
        <Promo />
        <Grid item xs={12} sm={12}>
          <Grid container spacing={3}>
            <ListFoodByCate />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page;
