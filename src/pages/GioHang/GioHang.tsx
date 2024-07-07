import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { AppProvider } from '@/context/AppContext.tsx';
import ProductInBasket from '@/components/ProductInBasket.tsx';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Food } from '@/model/Food';
import { selectTotalPrice } from '@/redux/slice/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import instance from '@/utils/axios';

const GioHang = () => {
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
      status: "PROCESSING",
      totalPrice: totalPrice
    };
    await instance
      .post('/order', orderRequest)
      .then(() => {
        toast.success('Order success');
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
          GIỎ HÀNG CỦA TÔI
        </Typography>
        {cart.length === 0 ? (
          <>
            <Box className="empty-product-basket" sx={{ backgroundColor: '#f8f7f5' }} p={6} mb={8}>
              <Grid container>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Box className="box-set-item-basket">
                    <Typography component="h1" variant="h1" pb={4}>
                      YOUR CART IS EMPTY!!
                    </Typography>
                    <Button
                      variant="contained"
                      color="error"
                      href="/thuc-don"
                      size="large"
                      sx={{ borderRadius: '25px' }}
                    >
                      START ORDERING
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <img src="../src/assets/empty-cart.png" alt="empty-cart" />
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
                      <ProductInBasket food={item} image="../src/assets/COMBO NHOM.jpg" />
                    ))}
                  </Box>
                  <Grid container>
                    <Paper elevation={3} sx={{ overflow: 'hidden', padding: '30px', backgroundColor: '#2d2d2d' }}>
                      <Typography component="h3" variant="h3" color="white" pb={2}>
                        SẼ NGON HƠN KHI THƯỞNG THỨC CÙNG…
                      </Typography>
                      <Stack
                        className="box-img"
                        direction="row"
                        spacing={2}
                        sx={{ overflow: 'scroll', overflowY: 'hidden' }}
                      >
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
                    <Typography component="h2" variant="h2" sx={{ borderBottom: '1px solid #ccc' }} pb={2} mb={2}>
                      1 MÓN
                    </Typography>
                    <Box className="content" sx={{ borderBottom: '1px solid #ccc' }} pb={2} mb={2}>
                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography component="p" variant="p">
                          Tổng đơn hàng
                        </Typography>
                        <Typography component="p" variant="p">
                          {totalPrice}
                        </Typography>
                      </Stack>
                      <Stack direction="row" justifyContent={'space-between'}>
                        <Typography component="p" variant="h2">
                          Tổng thanh toán
                        </Typography>
                        <Typography component="p" variant="h2">
                          {totalPrice}
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
                        Đặt hàng
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
