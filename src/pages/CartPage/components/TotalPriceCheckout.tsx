import { cartAtom } from '@/atom';
import { formatVND } from '@/libs';
import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';

function TotalPriceCheckout() {
  const [cart] = useAtom(cartAtom);
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardContent>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography color="gray">Tạm tính</Typography>
            <Typography>{formatVND(cart.totalPrice)}</Typography>
          </Stack>
          <Box mt={4} />
          <Divider />
          <Box mb={2} />
          <Stack direction="row" justifyContent="space-between">
            <Typography color="gray">Tổng tiền</Typography>
            <Typography color="red" fontWeight={600}>{formatVND(cart.totalPrice)}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default TotalPriceCheckout;
