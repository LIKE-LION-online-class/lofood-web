import { getCategoryByIdHttp } from '@/api/category';
import { CardContentNoPadding } from '@/components/CardContentNoPadding';
import { Breadcrumbs, Card, Grid, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function CateBreadcrumb() {
  const { t } = useTranslation();

  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ['getCategory', id],
    queryFn: () => getCategoryByIdHttp(id as string),
    enabled: !!id,
  });

  const breadcrumbs = [
    <Link key="1" color="inherit" to="/">
      {t('home')}
    </Link>,

    <Typography key="3" color="text.primary" component={Link} to={`/category/${data?.data?.id}`}>
      {data?.data?.name}
    </Typography>,
  ];

  return (
    <Grid item xs={12}>
      <Card
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
        }}
      >
        <CardContentNoPadding>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </CardContentNoPadding>
      </Card>
    </Grid>
  );
}

export default CateBreadcrumb;
