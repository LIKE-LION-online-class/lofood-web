import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { AppProvider } from '@/context/AppContext.tsx';
import ProductInBasket from '@/components/ProductInBasket.tsx';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Food } from '@/model/Food';
import { selectTotalPrice } from '@/redux/slice/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import instance from '@/utils/axios';
import { clearCart } from '@/redux/slice/cartSlice';
import { formatMoney } from '@/common/format';

const GioHang = () => {
  const dispatch = useDispatch();
  const cart: Food[] = useSelector((state) => state?.cart?.CartArr);
  const totalPrice = useSelector(selectTotalPrice);

  const navigate = useNavigate();

  const createOrder = async () => {
    const orderRequest = {
      foodOrderRequests: cart.map((food) => ({
        foodId: food.id,
        priceOrder: food.price,
        quantity: food.quantity,
      })),
      status: 'PROCESSING',
      totalPrice: totalPrice,
    };
    await instance
      .post('/order', orderRequest)
      .then(() => {
        toast.success('Order success');
        dispatch(clearCart());
        navigate('/');
      })
      .catch(() => {
        toast.error('Failed to create order');
        throw new Error('Failed to create order');
      });
  };

  return (
    <AppProvider>
      <Container>
        <Typography component="h1" variant="h1" pt={4} pb={4}>
          YOUR CART
        </Typography>
        {cart.length === 0 ? (
          <>
            <Box className="empty-product-basket" sx={{ backgroundColor: '#f8f7f5', padding: { sm: 2, md: 6 } }} mb={8}>
              <Grid container>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Box className="box-set-item-basket">
                    <Typography component="h1" variant="h1" pb={4}>
                      YOUR CART IS EMPTY!!
                    </Typography>
                    <Button variant="contained" color="error" href="/" size="large" sx={{ borderRadius: '25px' }}>
                      START ORDERING
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <img src="/assets/empty-cart.png" alt="empty-cart" style={{ width: '100%' }} />
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <>
            <Box className="has-product-basket">
              <Grid container spacing={4} mb={4}>
                <Grid item xs={8}>
                  <Box mb={2}>
                    {cart.map((item) => (
                      <ProductInBasket food={item} image="/assets/COMBO NHOM.jpg" />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={3} sx={{ overflow: 'hidden', padding: '20px' }}>
                    <Typography component="h2" variant="h2" sx={{ borderBottom: '1px solid #ccc' }} pb={2} mb={2}>
                      number of food items : {cart.length}
                    </Typography>
                    <Box className="content" sx={{ borderBottom: '1px solid #ccc' }} pb={2} mb={2}>
                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography component="p" variant="p">
                          TOTAL PRICE
                        </Typography>
                        <Typography component="p" variant="p">
                          {formatMoney(totalPrice)}
                        </Typography>
                      </Stack>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{ width: '100%', justifyContent: 'space-between' }}
                      onClick={async () => {
                        await createOrder();
                      }}
                    >
                      <Typography component="p" variant="h2">
                        ORDER
                      </Typography>
                      <Typography component="p" variant="h2">
                        {totalPrice}
                      </Typography>
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </AppProvider>
  );
};

export default GioHang;
