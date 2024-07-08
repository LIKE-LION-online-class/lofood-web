import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '@/redux/slice/restaurantSlice.tsx';
import { clearCart } from '@/redux/slice/cartSlice';

interface DanhMucMonAnProps {
  restaurant: any;
}

export default function RestaurantItem({ restaurant }: DanhMucMonAnProps) {
  const dispatch = useDispatch();
  return (
    <Card
      sx={{ width: '100%', borderRadius: 2, overflow: 'hidden' }}
      onClick={() => {
        dispatch(setRestaurant(restaurant?.id));
        dispatch(clearCart());
      }}
    >
      <CardMedia
        component="img"
        height="223"
        image={restaurant.logo ? restaurant?.logo : '../src/assets/KHUYEN MAI.jpg'}
        alt="Paella dish"
      />
      <CardContent sx={{ paddingBottom: '16px !important' }}>
        <Typography gutterBottom variant="h2" component="h2" className="sub-title " sx={{ positon: 'relative' }}>
          {restaurant?.name}
        </Typography>
        <Typography gutterBottom variant="h4" component="h4" className="sub-title " sx={{ positon: 'relative' }}>
          ADDRESS: {restaurant?.address}
        </Typography>
        <Typography>PHONE NUMBER: {restaurant?.phoneNumber}</Typography>
      </CardContent>
    </Card>
  );
}
