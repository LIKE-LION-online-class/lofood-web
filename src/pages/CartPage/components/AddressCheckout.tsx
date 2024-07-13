import { addressAtom } from '@/atom';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { useAtom } from 'jotai';

function AddressCheckout() {
  const [address] = useAtom(addressAtom);
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title="Giao tới"
          action={
            <Typography variant="body2" color="blue">
              Thay đổi
            </Typography>
          }
        />
        <CardContent>
          <Typography>{`${address.suburb}, ${address.city}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AddressCheckout;
