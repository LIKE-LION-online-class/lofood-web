import { Card, Container, Grid } from '@mui/material';
import FoodBreadcrumb from './components/FoodBreadcrumb';
import FoodCheckoutInfo from './components/FoodCheckoutInfo';
import FoodInfo from './components/FoodInfo';
import QuiltedImageList from './components/QuiltedImageList';
import { useQuery } from '@tanstack/react-query';
import { getFoodByIdHttp } from '@/api/food';
import { useParams } from 'react-router-dom';

function Page() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['getFood', id],
    queryFn: () => getFoodByIdHttp(id as string),
  });

  const images = [
    {
      img: data?.data?.data?.image,
      title: data?.data?.data?.name,
      cols: 2,
      rows: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      cols: 2,
    },
  ];
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} mt={3}>
          <FoodBreadcrumb />
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card elevation={0}>
                <QuiltedImageList images={images} />
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <FoodInfo />
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <FoodCheckoutInfo />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page;
