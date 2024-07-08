import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '@/redux/slice/restaurantSlice.tsx';
import { clearCart } from '@/redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface RecipeReviewCardProps {
  item: any;
}

export default function RestaurantCard({ item }: RecipeReviewCardProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Card sx={{ overflow: 'hidden', padding: '5px' }}>
      <CardMedia
        component="img"
        height="223"
        image={item?.logo ? item?.logo : '../src/assets/COMBO NHOM.jpg'}
        alt="Paella dish"
      />
      <CardContent>
        <Stack direction="row" spacing={2} justifyContent="space-between" pb={2}>
          <Typography gutterBottom variant="h3" component="h3">
            {item?.name ? item?.name : 'Lizard'}
          </Typography>
        </Stack>
        <Typography variant="h4" component="p" pb={2}>
          ADDRESS: {item?.address ? item?.address : 'address'}
        </Typography>
        <Typography gutterBottom variant="body2" component="p">
          PHONE NUMBER: {item?.phoneNumber ? item?.phoneNumber : ''}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="p" pb={2}>
          {item?.description ? item?.description : 'description'}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{ borderRadius: '25px' }}
            onClick={() => {
              dispatch(setRestaurant(item?.id));
              dispatch(clearCart());
              navigate('/auth/login');
            }}
            component={Link}
            to="/thuc-don"
          >
            GO TO MENU
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
