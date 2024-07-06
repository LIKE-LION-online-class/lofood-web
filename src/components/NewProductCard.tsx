import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Food } from '@/model/Food';
import { useDispatch } from 'react-redux';
import { addFood } from '@/redux/slice/cartSlice';
interface RecipeReviewCardProps {
  image: any;
  item: Food;
}

export default function NewProductCard({ image, item }: RecipeReviewCardProps) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ overflow: 'hidden', padding: '5px' }}>
      <CardMedia component="img" height="223" image={item?.image ? item?.image : "../src/assets/COMBO NHOM.jpg"} alt="Paella dish" />
      <CardContent>
        <Stack direction="row" spacing={2} justifyContent="space-between" pb={2}>
          <Typography gutterBottom variant="h3" component="h3">
            {item?.name ? item?.name : 'Lizard'}
          </Typography>
          <Typography gutterBottom variant="h3" component="h3">
            {item?.price ? item?.price : '25.000'}
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" component="p" pb={2}>
          {item?.description ? item?.description : '2 Miếng Gà + 1 Burger Zinger + 2 Pepsi (lớn)'}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{ borderRadius: '25px' }}
            onClick={() => dispatch(addFood(item))}
          >
            Thêm
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
