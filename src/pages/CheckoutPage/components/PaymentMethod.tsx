import { Card, CardHeader, Grid } from '@mui/material';

function PaymentMethod() {
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader title="Phương thức thanh toán" />
      </Card>
    </Grid>
  );
}

export default PaymentMethod;
