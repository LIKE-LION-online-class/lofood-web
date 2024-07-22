import { getRestaurantsHttp } from '@/api/restaurant';
import SkeletonBox from '@/components/SkeletonBox';
import { Box, Button, Card, CardActionArea, CardContent, CardHeader, Grid, Rating, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ListRestaurant() {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ['getRestaurants'],
    queryFn: getRestaurantsHttp,
  });

  if (isLoading) {
    return (
      <Grid item xs={12}>
        <SkeletonBox height={600} />;
      </Grid>
    );
  }

  if (!data?.data?.length) {
    return null;
  }

  const renderList = () => {
    return data?.data?.map((item: any) => (
      <Grid item xs={12} sm={6} md={2} key={item.id}>
        <Card elevation={0}>
          <CardActionArea component={Link} to={`/restaurant/${item?.id}`}>
            <CardMedia component="img" height="160" image={item?.logo} alt="green iguana" />
            <CardHeader title={item?.name} subheader={item?.description} />
            <CardContent>
              <Rating
                name="read-only"
                defaultValue={2}
                readOnly
                size="small"
                icon={<IconStarFilled fontSize="inherit" size={14} />}
                emptyIcon={<IconStar fontSize="inherit" size={14} />}
              />
              <Typography variant="body2" mt={1}>
                {item?.address}
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
        <CardHeader title={t('recommend')} titleTypographyProps={{ variant: 'h3' }} />
        <CardContent>
          <Grid container spacing={3}>
            {renderList()}
            <Grid item xs={12}>
              <Stack alignItems="center">
                <Box>
                  <Button variant="contained" color="info" disableElevation>
                    {t('loadMore')}
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ListRestaurant;
