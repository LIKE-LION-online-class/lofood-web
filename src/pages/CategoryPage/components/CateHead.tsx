import { getCategoryByIdHttp } from '@/api/category';
import { Card, CardHeader, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function CateHead() {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['getCategory', id],
    queryFn: () => getCategoryByIdHttp(id as string),
    enabled: !!id,
  });

  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title={data?.data?.name}
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
      </Card>
    </Grid>
  );
}

export default CateHead;
