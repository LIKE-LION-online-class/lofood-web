import { Container, Grid } from '@mui/material';
import AddressCheckout from './components/AddressCheckout';
import CheckoutSubmit from './components/CheckoutSubmit';
import ListCartProduct from './components/ListCartProduct';
import TotalPriceCheckout from './components/TotalPriceCheckout';

function Page() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={9}>
          <ListCartProduct />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container spacing={3}>
            <AddressCheckout />
            <TotalPriceCheckout />
            <CheckoutSubmit />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page;
