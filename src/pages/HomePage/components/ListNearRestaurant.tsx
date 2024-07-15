import { getNearestLocationHttp } from '@/api/restaurant';
import { coordsAtom } from '@/atom';
import SkeletonBox from '@/components/SkeletonBox';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const distances = [10, 20, 30, 40];

function ListNearRestaurant() {
  const [coords] = useAtom(coordsAtom);

  const { latitude, longitude } = coords;

  const { t } = useTranslation();

  const [select, setSelect] = useState(10);

  const { data, isLoading } = useQuery({
    queryKey: ['getNearestLocation', select],
    queryFn: () =>
      getNearestLocationHttp({
        displayRadius: select,
        latitude,
        longitude,
        pageSize: 20,
      }),
    enabled: !!latitude && !!longitude && !!select,
  });

  const renderList = () => {
    if (isLoading) {
      return (
        <Grid item xs={12}>
          <SkeletonBox height={200} />
        </Grid>
      );
    }
    if (!data?.data?.length) {
      return (
        <Grid item xs={12} md={12}>
          <Typography textAlign="center">{t('restaurantNoData')}</Typography>
        </Grid>
      );
    }
    return data?.data?.map((item: any) => (
      <Grid item xs={12} key={item.id} md={2}>
        <Card elevation={0}>
          <CardActionArea component={Link} to={`/restaurant/${item?.id}`}>
            <CardMedia component="img" height="160" image={item?.logo} />
            <CardHeader title={item?.name} subheader={item?.description} />
            <CardContent></CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title={t('restaurantNearby')}
          titleTypographyProps={{
            variant: 'h3',
          }}
          action={
            <Stack direction="row" spacing={2}>
              {distances.map((item) => (
                <Button
                  key={item}
                  variant={item === select ? 'outlined' : 'text'}
                  size="small"
                  onClick={() => setSelect(item)}
                >
                  {`${item} km`}
                </Button>
              ))}
            </Stack>
          }
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

export default ListNearRestaurant;
