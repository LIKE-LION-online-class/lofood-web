import { createOrderHttp } from '@/api/order';
import { cartAtom } from '@/atom';
import { notify } from '@/components/CustomToast';
import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useNavigate } from 'react-router-dom';

function CheckoutSubmit() {
  const [cart, setCart] = useAtom(cartAtom);
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ['createOrder'],
    mutationFn: createOrderHttp,
    onSuccess(data) {
      notify('Đặt hàng thành công', 'success');
      setCart(RESET);
      navigate(`/order/success/${data?.data?.data?.id}`);
    },
    onError(error) {
      notify('Đặt hàng thất bại', 'error');
      console.log(error);
    },
  });

  const handleCreateOrder = () => {
    mutate({
      foodOrderRequests: cart.items.map((food) => ({
        foodId: food.id,
        priceOrder: food.price,
        quantity: food.quantity,
      })),
      status: 'PROCESSING',
      totalPrice: cart.totalPrice,
    });
  };

  return (
    <Grid item xs={12}>
      <LoadingButton
        fullWidth
        variant="contained"
        disableElevation
        color="error"
        loading={isPending}
        size="large"
        onClick={handleCreateOrder}
      >
        Đặt hàng
      </LoadingButton>
    </Grid>
  );
}

export default CheckoutSubmit;
