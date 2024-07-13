import { getFoodByCategoryHttp } from '@/api/food';
import { cartAtom } from '@/atom';
import SkeletonBox from '@/components/SkeletonBox';
import { IFood } from '@/interfaces';
import { addToCart, formatVND } from '@/libs';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconBasket } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useParams } from 'react-router-dom';

function ListFoodByCate() {
  const { id } = useParams();

  const [cart, setCart] = useAtom(cartAtom);

  const { data, isLoading } = useQuery({
    queryKey: ['getFoodByCategory', id],
    queryFn: () => getFoodByCategoryHttp(id as string),
  });

  const handleAddToCart = (item: IFood) => {
    const newCart = addToCart(cart, item);
    setCart(newCart);
  };

  if (isLoading) {
    return (
      <Grid item xs={12}>
        <SkeletonBox height={600} />;
      </Grid>
    );
  }

  const renderList = () => {
    if (data?.data?.length === 0) {
      return (
        <Grid item xs={12}>
          <Typography variant="body2" color="text.secondary" mb={1} textAlign="center">
            Không có món ăn nào
          </Typography>
        </Grid>
      );
    }

    return data?.data?.map((item: IFood) => (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card elevation={0}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={item?.image} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                {item?.description}
              </Typography>
              <Chip label={formatVND(Number(item?.price))} size="small" color="error" />
            </CardContent>
            <CardActions>
              <Box ml="auto">
                <Tooltip title="Add to cart" arrow>
                  <IconButton
                    sx={{
                      backgroundColor: '#f5f5f5',
                    }}
                    onClick={() => handleAddToCart(item)}
                  >
                    <IconBasket size={16} />
                  </IconButton>
                </Tooltip>
              </Box>
            </CardActions>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardContent>
          <Grid container spacing={3}>
            {renderList()}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ListFoodByCate;
