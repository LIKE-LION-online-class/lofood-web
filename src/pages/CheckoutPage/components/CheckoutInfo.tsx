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
  Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import { useState } from 'react';
import { useQueryString } from './CheckoutSubmit';

function CheckoutInfo() {
  const [cart] = useAtom(cartAtom);

  const [open, setOpen] = useState(true);

  const query = useQueryString();

  const flow = query.get('flow');

  const handleClick = () => {
    setOpen(!open);
  };

  const renderList = () => {
    if (flow === 'buynow' && cart?.itemsBuyNow?.quantity) {
      return (
        <ListItemButton sx={{ pl: 4 }} dense>
          <ListItemText primary={`${cart.itemsBuyNow.quantity}x`} />
          <ListItemText primary={cart.itemsBuyNow.name} />
          <ListItemText primary={formatVND(cart.itemsBuyNow.price)} />
        </ListItemButton>
      );
    }
    return cart.items.map((item) => (
      <ListItemButton sx={{ pl: 4 }} dense key={item?.id}>
        <ListItemText primary={`${item.quantity}x`} />
        <ListItemText primary={item.name} />
        <ListItemText primary={formatVND(item.price)} />
      </ListItemButton>
    ));
  };
  const renderInfo = () => {
    return (
      <React.Fragment>
        <ListItemButton onClick={handleClick} dense>
          <ListItemText primary={`${flow === 'buynow' ? 1 : cart.items.length} món ăn (Xem thông tin)`} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding dense>
            {renderList()}
          </List>
        </Collapse>
      </React.Fragment>
    );
  };

  const totalPrice = () => {
    if (flow === 'buynow' && cart?.itemsBuyNow?.quantity) {
      return cart.itemsBuyNow.price * cart.itemsBuyNow.quantity;
    }
    return cart.totalPrice;
  };

  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title="Đơn hàng"
          subheader={renderInfo()}
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
        <CardContent>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Typography color="gray">Tạm tính</Typography>
            <Typography>{formatVND(totalPrice())}</Typography>
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
              {formatVND(totalPrice())}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CheckoutInfo;
