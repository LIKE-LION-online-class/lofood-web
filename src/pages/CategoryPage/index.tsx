import { Container, Grid } from '@mui/material';
import ListCategory from '../HomePage/components/ListCategory';
import Promo from '../HomePage/components/Promo';
import ListFoodByCate from './components/ListFoodByCate';

function Page() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={2}>
        <Promo />
        <Grid item xs={12} sm={3}>
          <Grid container spacing={3}>
            <ListCategory />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            <ListFoodByCate />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page;
