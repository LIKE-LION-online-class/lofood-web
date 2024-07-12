import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '@/redux/slice/restaurantSlice.tsx';
import { clearCart } from '@/redux/slice/cartSlice';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  item: any;
}

export default function RestaurantCard({ item }: RestaurantCardProps) {
  const dispatch = useDispatch();
  console.log(item);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item?.logo ? item?.logo : '/assets/COMBO NHOM.jpg'}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            {item?.name ? item?.name : 'Name'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            distance: {item?.distance ? item?.distance : 'distance'} km
          </Typography>
          <Typography variant="body2" color="text.secondary">
            description: {item?.description ? item?.description : 'description'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ borderRadius: '25px' }}
          onClick={() => {
            dispatch(setRestaurant(item?.id));
            dispatch(clearCart());
          }}
          component={Link}
          to="/thuc-don"
        >
          GO TO MENU
        </Button>
      </CardActions>
    </Card>
  );
}
