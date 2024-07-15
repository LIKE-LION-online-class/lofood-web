import { createOrderHttp } from '@/api/order';
import { cartAtom } from '@/atom';
import { notify } from '@/components/CustomToast';
import { LoadingButton } from '@mui/lab';
import { Grid } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useLocation, useNavigate } from 'react-router-dom';

export const useQueryString = () => {
  return new URLSearchParams(useLocation().search);
};

function CheckoutSubmit() {
  const [cart, setCart] = useAtom(cartAtom);
  const navigate = useNavigate();

  const query = useQueryString();
  const queryClient = useQueryClient();

  const flow = query.get('flow');

  const { mutate, isPending } = useMutation({
    mutationKey: ['createOrder'],
    mutationFn: createOrderHttp,
    onSuccess(data) {
      notify('Đặt hàng thành công', 'success');
      if (flow !== 'buynow') {
        setCart(RESET);
      }
      queryClient.refetchQueries({ queryKey: ['getorderuserlogged'] });
      navigate(`/order/success/${data?.data?.data?.id}`);
    },
    onError() {
      notify('Đặt hàng thất bại', 'error');
    },
  });

  const handleCreateOrder = () => {
    if (flow === 'buynow' && cart?.itemsBuyNow?.quantity) {
      return mutate({
        foodOrderRequests: [
          { foodId: cart?.itemsBuyNow.id, priceOrder: cart?.itemsBuyNow.price, quantity: cart?.itemsBuyNow.quantity },
        ],
        status: 'PROCESSING',
        totalPrice: cart.itemsBuyNow.price * cart.itemsBuyNow.quantity,
      });
    }

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
        loading={isPending}
        sx={{
          backgroundColor: '#FF424E',
          color: 'white',
          '&:hover': {
            backgroundColor: '#FF424E',
          },
        }}
        size="large"
        onClick={handleCreateOrder}
      >
        Đặt hàng
      </LoadingButton>
    </Grid>
  );
}

export default CheckoutSubmit;
