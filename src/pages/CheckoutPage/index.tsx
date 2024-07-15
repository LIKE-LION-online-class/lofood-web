import { Container, Grid } from '@mui/material';
import CheckoutInfo from './components/CheckoutInfo';
import CheckoutSubmit from './components/CheckoutSubmit';
import PaymnetMethod from './components/PaymentMethod';
import AddressCheckout from '../CartPage/components/AddressCheckout';

function Page() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={12}>
          <PaymnetMethod />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={3}>
            <AddressCheckout />
            <CheckoutInfo />
            <CheckoutSubmit />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page;
