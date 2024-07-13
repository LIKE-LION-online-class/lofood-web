import { getIn5KmHttp } from '@/api/restaurant';
import { coordsAtom } from '@/atom';
import SkeletonBox from '@/components/SkeletonBox';
import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';

function ListNearRestaurant() {
  const [coords] = useAtom(coordsAtom);

  const { latitude, longitude } = coords;

  const { data, isLoading } = useQuery({
    queryKey: ['getIn5Km', latitude, longitude],
    queryFn: () =>
      getIn5KmHttp({
        latitude,
        longitude,
      }),
  });

  if (isLoading) {
    return (
      <Grid item xs={12}>
        <SkeletonBox height={200} />
      </Grid>
    );
  }

  if (!data?.data?.length) {
    return null;
  }

  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader title="Near you" />
        <CardContent>
          <Grid container spacing={3}></Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ListNearRestaurant;
