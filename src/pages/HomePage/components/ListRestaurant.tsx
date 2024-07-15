import { getRestaurantsHttp } from '@/api/restaurant';
import { Box, Button, Card, CardContent, CardHeader, Grid, Rating, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import SkeletonBox from '@/components/SkeletonBox';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
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
      <Grid item xs={12} sm={6} md={3} key={item.id}>
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
        <CardHeader title={t('restaurant')} titleTypographyProps={{ variant: 'h3' }} />
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
