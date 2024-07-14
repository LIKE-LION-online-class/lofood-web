import { getRestaurantByIdHttp } from '@/api/restaurant';
import SkeletonBox from '@/components/SkeletonBox';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Toolbar, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

function RestaurantHead() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ['restaurant', id],
    queryFn: () => getRestaurantByIdHttp(id as string),
  });


  const renderCard = () => {
    if (isLoading) {
      return <SkeletonBox height={180} />;
    }
    return (
      <Card
        elevation={0}
        sx={{
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        <CardContent>
          <Stack direction="row" gap={2}>
            <CardMedia
              image={data?.data?.logo}
              component="img"
              alt="restaurant"
              sx={{
                height: '60px',
                width: '60px',
                borderRadius: '50%',
              }}
            />
            <Stack spacing={2}>
              <Typography variant="body1">{data?.data?.name}</Typography>
              <Typography variant="caption">{data?.data?.description}</Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          <Toolbar>
            <Stack direction="row" spacing={4}>
              <Button color="inherit">{t('category')}</Button>
              <Button color="inherit">{t('food')}</Button>
              <Button color="inherit">{t('info')}</Button>
            </Stack>
          </Toolbar>
        </CardActions>
      </Card>
    );
  };

  return (
    <Grid item xs={12} md={12} mt={3}>
      {renderCard()}
    </Grid>
  );
}

export default RestaurantHead;
