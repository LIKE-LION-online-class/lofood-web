import React, { ReactNode } from 'react';
import { Toolbar, Box, Container, Typography, Button, Grid } from '@mui/material';
import {AppProvider} from "@/context/AppContext.tsx";
import Search from '@/pages/SearchWithMap/Search';
import Layout from '@/components/layout';


const GioHang =() => {
  return (
    <AppProvider>
      <Container maxWidth="lg" sx={{paddingTop:'100px'}}>
        <Typography component="h2" variant="h2">
          GIỎ HÀNG CỦA TÔI
        </Typography>
        <Box sx={{backgroundColor:'#f8f7f5'}} p={6}>
          <Grid container>
              <Grid item xs={6} sx={{display:'flex',justifyContent:'center',alignItems:'center' }}>
                <Box className="box-set-item-basket">
                  <Typography component="h1" variant="h1" pb={4}>
                    GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY!
                  </Typography>
                  <Button variant="contained" color="error" href="#contained-buttons"  size="large" sx={{borderRadius:'25px'}}>
                    Bắt đầu đặt hàng
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <img src="../src/assets/empty-cart.png" alt="empty-cart" />
              </Grid>
          </Grid>
        </Box>
      </Container>
    </AppProvider>
  );
};

export default GioHang;