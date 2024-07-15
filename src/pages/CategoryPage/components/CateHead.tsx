import { getCategoryByIdHttp } from '@/api/category';
import SkeletonBox from '@/components/SkeletonBox';
import { Card, CardHeader, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function CateHead() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['getCategory', id],
    queryFn: () => getCategoryByIdHttp(id as string),
    enabled: !!id,
  });

  const renderInfo = () => {
    if (isLoading) {
      return <SkeletonBox height={50} />;
    }
    return (
      <Card elevation={0}>
        <CardHeader
          title={data?.data?.name}
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
      </Card>
    );
  };

  return (
    <Grid item xs={12}>
      {renderInfo()}
    </Grid>
  );
}

export default CateHead;
