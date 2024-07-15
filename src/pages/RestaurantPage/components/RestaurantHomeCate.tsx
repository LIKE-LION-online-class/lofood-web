import { getCategoriesByRestaurantIdHttp } from '@/api/category';
import SkeletonBox from '@/components/SkeletonBox';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function RestaurantHomeCate() {
  const { t } = useTranslation();
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['getCategoryByRestaurant', id],
    queryFn: () => getCategoriesByRestaurantIdHttp(id as string),
  });

  const images = [
    'https://icons.iconarchive.com/icons/martin-berube/food/256/pizza-icon.png',
    'https://cdn1.iconfinder.com/data/icons/icons-set-of-food-categories-for-the-market/256/food_category_market-01-512.png',
    'https://cdn1.iconfinder.com/data/icons/icons-set-of-food-categories-for-the-market/256/food_category_market-04-512.png',
  ];

  const renderInfo = () => {
    if (isLoading) {
      return <SkeletonBox height={200} />;
    }

    return (
      <Card elevation={0}>
        <CardHeader
          title={t('category')}
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
        <CardContent>
          <Grid container spacing={2}>
            {data?.data?.map((item: any, index: number) => (
              <Grid item xs={12} md={2}>
                <Card elevation={0}>
                  <CardActionArea component={Link} to={`/category/${item?.id}`}>
                    <CardContent>
                      <Stack direction="row" gap={2} alignItems="center">
                        <CardMedia
                          image={images[index]}
                          sx={{
                            width: 32,
                            height: 32,
                          }}
                        />
                        <Typography>{item.name}</Typography>
                      </Stack>
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

  if (!data?.data?.length && !isLoading) {
    return null;
  }

  return (
    <Grid item xs={12} md={12}>
      {renderInfo()}
    </Grid>
  );
}

export default RestaurantHomeCate;
