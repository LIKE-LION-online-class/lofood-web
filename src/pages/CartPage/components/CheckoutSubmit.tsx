import { cartAtom } from '@/atom';
import { Button, Grid } from '@mui/material';
import { useAtom } from 'jotai';
import { Link } from 'react-router-dom';

function CheckoutSubmit() {
  const [cart] = useAtom(cartAtom);

  return (
    <Grid item xs={12}>
      <Link to="/checkout">
        <Button fullWidth variant="contained" disableElevation color="error" size="large">
          Mua hàng ({cart.items.length} món ăn)
        </Button>
      </Link>
    </Grid>
  );
}

export default CheckoutSubmit;
