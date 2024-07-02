import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { AppContext } from '../context/AppContext.tsx';
import { useContext } from 'react';
import { Food } from '@/model/Food.tsx';
import { useDispatch } from 'react-redux';
import { addFood, deleteFood, minusFood } from '@/redux/slice/cartSlice.tsx';

interface RecipeReviewCardProps {
  image?: string;
  food: Food;
}

const ProductInBasket = ({ image, food }: RecipeReviewCardProps) => {
  const { isOpen, toogleSideBar } = useContext(AppContext);
  const dispatch = useDispatch();

  return (
    <Card sx={{ overflow: 'hidden', padding: '5px' }} className="card-productInBasket">
      <Grid container sx={{ alignItems: 'flex-start' }}>
        <Grid item xs={8}>
          <Grid sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Grid item xs={6}>
              <CardMedia
                component="img"
                width="204"
                height="205"
                image={food.image ? food.image : image}
                alt="Paella dish"
              />
            </Grid>
            <Grid item xs={6} pt={4}>
              <CardContent>
                <Stack direction="column" pb={2}>
                  <Typography gutterBottom variant="h3" component="h3" className="product-name">
                    {food.name}
                  </Typography>
                  <Box className="detail-product">
                    <Link
                      href="javascript:void(0)"
                      title="xem-chi-tiet"
                      color="#929191"
                      className="switch"
                      onClick={toogleSideBar}
                    >
                      Xem chi tiết
                    </Link>
                    {isOpen ? (
                      <Typography variant="p" component="div" className="content">
                        {food?.description}
                      </Typography>
                    ) : (
                      ''
                    )}
                  </Box>
                </Stack>
                <Stack direction="row">
                  <Button title="Xóa" onClick={() => dispatch(deleteFood(food))}>
                    Xóa
                  </Button>
                </Stack>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} pt={4}>
          <CardActions>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Stack direction="row" className="box-action">
                <Link color="inherit" data-btn-type="btn-decrement" onClick={() => dispatch(minusFood(food))}>
                  <i className="icon-decrement"></i>
                </Link>
                <input
                  className="quantity"
                  name="quantity"
                  type="text"
                  value={food?.quantity < 0 || food?.quantity === 0 ? 1 : food?.quantity}
                />
                <Link color="error" data-btn-type="btn-increment" onClick={() => dispatch(addFood(food))}>
                  <i className="icon-increment"></i>
                </Link>
              </Stack>
              <Typography gutterBottom variant="h3" component="h3" className="price">
                {food.price ? food.price : '25.000'}
              </Typography>
            </Stack>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
export default ProductInBasket;
