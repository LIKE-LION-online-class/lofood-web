import { Box, Container, Typography, Grid } from '@mui/material';
import { AppProvider } from '@/context/AppContext.tsx';
import CartHistoryItem from '@/components/CartHistory.tsx';
import { useEffect, useState } from 'react';
import instance from '@/utils/axios';
import { toast } from 'react-toastify';


const OrderHistory = () => {
  const [orders, setOrders] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await instance
        .get('/order/getOrderUserLogged')
        .then((res) => {
          toast.success('get order success success');
          setOrders(res.data);
        })
        .catch(() => {
          toast.error('Failed to get order history');
          throw new Error('Failed to create order');
        });
    }
    fetchData();
  }, []);


  return (
    <AppProvider>
      <Container style={{ minHeight: '80vh' }}>
        <Typography component="h1" variant="h1" pt={4} pb={4}>
          ORDER HISTORY
        </Typography>
        <Box className="has-product-basket">
          <Grid container spacing={4} mb={4}>
            <Grid item xs={8}>
              <Box mb={2}>
                {orders.map((order: any) => (
                  <>
                    <CartHistoryItem item={order} />
                    <br></br>
                  </>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </AppProvider>
  );
};

export default OrderHistory;
