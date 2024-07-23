import { getRestaurantsHttp } from '@/api/restaurant';
import SkeletonBox from '@/components/SkeletonBox';
import { LoadingButton } from '@mui/lab';
import { Box, Card, CardActionArea, CardContent, CardHeader, Grid, Rating, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ListRestaurant() {
  const { t } = useTranslation();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['getHomeRestaurants'],
    queryFn: ({ pageParam }) => getRestaurantsHttp({ params: { pageSize: 5, page: pageParam } }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any, _, lastPageParam) => {
      if (lastPage?.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  if (isLoading) {
    return (
      <Grid item xs={12}>
        <SkeletonBox height={600} />;
      </Grid>
    );
  }

  if (!data?.pages?.length) {
    return null;
  }

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const renderList = () => {
    return data?.pages?.map((page: any) => (
      <>
        {page?.data?.map((item: any) => (
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
        ))}
      </>
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
                  <LoadingButton
                    variant="contained"
                    color="info"
                    disableElevation
                    onClick={handleLoadMore}
                    loading={isFetchingNextPage}
                  >
                    {t('loadMore')}
                  </LoadingButton>
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
