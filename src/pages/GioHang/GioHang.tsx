import React, { ReactNode } from 'react';
import { Toolbar, Box, Container, Typography, Button, Grid } from '@mui/material';
import {AppProvider} from "@/context/AppContext.tsx";
import Search from '@/pages/SearchWithMap/Search';
import Layout from '@/components/layout';


const GioHang =() => {
  return (
    <AppProvider>
      <Container maxWidth="lg" sx={{paddingTop:'100px'}}>
        <Box sx={{backgroundColor:'#f8f7f5'}}>
          <Grid container>
              <Grid item xs={6}>
                <Box sx={{display:'flex',justifyContent:'center',textAlign:'center'}}>
                  <Typography component="h3" variant="h3">
                    GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY!
                  </Typography>
                  <Button variant="outlined" color="inherit" href="#contained-buttons"  size="large" sx={{borderRadius:'25px'}}>
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