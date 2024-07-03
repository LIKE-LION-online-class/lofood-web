import React, { ReactNode } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { AppProvider } from "@/context/AppContext.tsx";
import ProductInBasket from '@/components/ProductInBasket.tsx';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const GioHang = () => {
  return (
    <AppProvider>
      <Container>
        <img src="../src/assets/logo-sidebar.png" alt="logo-sidebar" height="22" />
        <Typography component="h1" variant="h1" pt={4} pb={4}>
          GIỎ HÀNG CỦA TÔI
        </Typography>
        <Box className="empty-product-basket" sx={{ backgroundColor: '#f8f7f5' }} p={6} mb={8}>
          <Grid container>
            <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box className="box-set-item-basket">
                <Typography component="h1" variant="h1" pb={4}>
                  GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY!
                </Typography>
                <Button variant="contained" color="error" href="/thuc-don" size="large"
                  sx={{ borderRadius: '25px' }}>
                  Bắt đầu đặt hàng
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img src="../src/assets/empty-cart.png" alt="empty-cart" />
            </Grid>
          </Grid>
        </Box>

        <Box className="has-product-basket">
          <Grid container spacing={4} mb={4}>
            <Grid item xs={8}>
              <Box mb={2}>
                <ProductInBasket image="../src/assets/COMBO NHOM.jpg" />
              </Box>
              <Grid container>
                <Paper elevation={3} sx={{ overflow: 'hidden', padding: '30px', backgroundColor: '#2d2d2d' }}>
                  <Typography component="h3" variant="h3" color="white" pb={2}>
                    SẼ NGON HƠN KHI THƯỞNG THỨC CÙNG…
                  </Typography>
                  <Stack className="box-img" direction="row" spacing={2} sx={{ overflow: 'scroll', overflowY: 'hidden' }}>
                    <img src="../src/assets/add_3taro.jpg" alt="add_3taro" height="162" />
                    <img src="../src/assets/add_3taro.jpg" alt="add_3taro" height="162" />
                    <img src="../src/assets/add_3taro.jpg" alt="add_3taro" height="162" />
                    <img src="../src/assets/add_3taro.jpg" alt="add_3taro" height="162" />
                    <img src="../src/assets/add_3taro.jpg" alt="add_3taro" height="162" />
                    <img src="../src/assets/add_3taro.jpg" alt="add_3taro" height="162" />
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3} sx={{ overflow: 'hidden', padding: '20px' }}>
                <Typography component="h2" variant="h2" sx={{ borderBottom: '1px solid #ccc' }} pb={2} mb={2}>1 MÓN</Typography>
                <Box className="content" sx={{ borderBottom: '1px solid #ccc' }} pb={2} mb={2}>
                  <Stack direction="row" justifyContent={'space-between'}>
                    <Typography component="p" variant="p">
                      Tổng đơn hàng
                    </Typography>
                    <Typography component="p" variant="p">
                      79.000₫
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent={'space-between'}>
                    <Typography component="p" variant="h2">
                      Tổng thanh toán
                    </Typography>
                    <Typography component="p" variant="h2">
                      79.000₫
                    </Typography>
                  </Stack>
                </Box>
                <Button variant="contained" disabled sx={{ width: '100%', justifyContent: 'space-between' }}>
                  <Typography component="p" variant="h2">
                    thanh toán
                  </Typography>
                  <Typography component="p" variant="h2">
                    79.000₫
                  </Typography>
                </Button>
              </Paper>
            </Grid>
          </Grid>

        </Box>

      </Container>
    </AppProvider >
  );
};

export default GioHang;