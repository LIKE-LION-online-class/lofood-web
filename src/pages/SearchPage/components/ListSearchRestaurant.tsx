import { searchRestaurantHttp } from '@/api/restaurant';
import SkeletonBox from '@/components/SkeletonBox';
import { useQueryString } from '@/pages/CheckoutPage/components/CheckoutSubmit';
import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

function ListSearchRestaurant() {
  const query = useQueryString();
  const queryString = query.get('q');
  const { data, isLoading } = useQuery({
    queryKey: ['searchRestaurant', queryString],
    queryFn: () => searchRestaurantHttp(queryString as string),
  });

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
            Không có kết quả nào
          </Typography>
        </Grid>
      );
    }

    return data?.data?.map((item: any) => (
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Card elevation={0}>
          <CardActionArea component={Link} to={`/restaurant/${item?.id}`}>
            <CardMedia component="img" height="140" image={item?.logo} alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={1}>
                {item?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title="Kết quả tìm kiếm"
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
        <CardContent>
          <Grid container spacing={3}>
            {renderList()}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ListSearchRestaurant;
