import { getFoodByRestaurantIdHttp } from '@/api/food';
import SkeletonBox from '@/components/SkeletonBox';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function RestaurantHomeFood() {
  const { t } = useTranslation();
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['getFoodByRestaurantId', id],
    queryFn: () => getFoodByRestaurantIdHttp(id as string),
  });

  if (!data?.data?.length && !isLoading) {
    return null;
  }

  const renderFoods = () => {
    if (isLoading) {
      return <SkeletonBox height={200} />;
    }
    return (
      <Card elevation={0}>
        <CardHeader title={t('food')} titleTypographyProps={{ variant: 'h3' }} />
        <CardContent>
          <Grid container spacing={2}>
            {data?.data?.map((item: any) => (
              <Grid item xs={12} md={2} key={item?.id}>
                <Card elevation={0}>
                  <CardActionArea component={Link} to={`/food/${item?.id}`}>
                    <CardMedia image={item?.image} sx={{ height: 150 }} />
                    <CardContent>
                      <Typography>{item.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    );
  };

  return (
    <Grid item xs={12} md={12}>
      {renderFoods()}
    </Grid>
  );
}

export default RestaurantHomeFood;
