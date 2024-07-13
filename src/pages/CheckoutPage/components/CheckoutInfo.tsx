import { cartAtom } from '@/atom';
import { formatVND } from '@/libs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { useAtom } from 'jotai';
import { useState } from 'react';

function CheckoutInfo() {
  const [cart] = useAtom(cartAtom);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const render = () => {
    return (
      <>
        <ListItemButton onClick={handleClick} dense>
          <ListItemText primary={`6 món ăn (Xem thông tin)`} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding dense>
            {cart.items.map((item) => (
              <ListItemButton sx={{ pl: 4 }} dense key={item?.id}>
                <ListItemText primary={`${item.quantity}x`} />
                <ListItemText primary={item.name} />
                <ListItemText primary={formatVND(item.price)} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </>
    );
  };
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader title="Đơn hàng" subheader={render()} />
        <CardContent>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography color="gray">Tạm tính</Typography>
            <Typography>{formatVND(cart.totalPrice)}</Typography>
          </Stack>

          <Typography color="gray" variant="caption">
            Phí vận chuyển được tính khi bạn chọn phương thức thanh toán
          </Typography>
          <Box mt={4} />

          <Divider />
          <Box mb={2} />
          <Stack direction="row" justifyContent="space-between">
            <Typography color="gray">Tổng tiền</Typography>
            <Typography color="red" fontWeight={600}>
              {formatVND(cart.totalPrice)}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CheckoutInfo;
