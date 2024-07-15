import { cartAtom } from '@/atom';
import { IFood } from '@/interfaces';
import { handleCart } from '@/libs';
import { LoadingButton } from '@mui/lab';
import { Box, Card, CardActions, CardContent, Grid, IconButton, Stack, Typography } from '@mui/material';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FoodCheckoutInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useAtom(cartAtom);

  const [count, setCount] = useState(1);

  const queryClient = useQueryClient();

  const handleBuyNow = () => {
    const data = queryClient.getQueryData<{ data: any }>(['getFood', id]);
    const food = { ...data?.data?.data, quantity: count } as IFood;
    setCart({ ...cart, itemsBuyNow: food });
    navigate('/checkout?flow=buynow');
  };

  const handleAddToCart = () => {
    const data = queryClient.getQueryData<{ data: any }>(['getFood', id]);
    if (!data?.data) return;
    const food = data?.data?.data as IFood;
    const newCart = handleCart({
      cart,
      food: {
        id: food?.id,
        name: food?.name,
        description: food?.description,
        price: food?.price,
        image: food?.image,
        categoryId: food?.categoryId,
        quantity: count,
      },
      type: 'update',
    });
    setCart({ ...newCart, open: true });
  };

  useEffect(() => {
    const cartItem = cart.items.find((item) => item.id === id);
    setCount(cartItem?.quantity || 1);
  }, [cart.items]);

  return (
    <Grid item xs={12} md={12}>
      <Card elevation={0}>
        <CardContent>
          <Typography variant="h5">Số lượng</Typography>

          <Stack my={2} direction="row" gap={2} alignItems="center">
            <Box>
              <IconButton
                size="small"
                onClick={() => setCount((count) => (count > 1 ? count - 1 : 1))}
                sx={{
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              >
                <IconMinus size={20} />
              </IconButton>
            </Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              height={32}
              width={32}
              sx={{
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            >
              {count}
            </Stack>
            <Box>
              <IconButton
                onClick={() => setCount(count + 1)}
                size="small"
                sx={{
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              >
                <IconPlus size={20} />
              </IconButton>
            </Box>
          </Stack>
          <Typography variant="h5">Tạm tính</Typography>
        </CardContent>
        <CardActions>
          <Stack width="100%" gap={2}>
            <LoadingButton
              variant="contained"
              fullWidth
              onClick={handleBuyNow}
              disableElevation
              sx={{
                backgroundColor: '#FF424E',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#FF424E',
                },
              }}
            >
              Mua ngay
            </LoadingButton>
            <LoadingButton variant="outlined" color="info" fullWidth disableElevation onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </LoadingButton>
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default FoodCheckoutInfo;
