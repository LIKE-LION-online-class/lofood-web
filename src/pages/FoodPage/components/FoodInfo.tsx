import { getFoodByIdHttp } from '@/api/food';
import SkeletonBox from '@/components/SkeletonBox';
import { formatVND } from '@/libs';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function FoodInfo() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['getFood', id],
    queryFn: () => getFoodByIdHttp(id as string),
    enabled: !!id,
  });

  if (!data && !isLoading) {
    return null;
  }

  const renderInfo = () => {
    if (isLoading) {
      return <SkeletonBox height={200} />;
    }
    return (
      <Card elevation={0}>
        <CardHeader
          title="Thông tin món ăn"
          titleTypographyProps={{
            variant: 'h3',
          }}
          subheader={data?.data?.data?.name}
        />
        <CardContent>
          <Typography>{data?.data?.data?.description}</Typography>
          <Typography fontWeight={600} fontSize={20}>
            {formatVND(data?.data?.data?.price)}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <Grid item xs={12} md={12}>
      {renderInfo()}
    </Grid>
  );
}

export default FoodInfo;
