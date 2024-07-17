import { CardContentNoPadding } from '@/components/CardContentNoPadding';
import { Breadcrumbs, Card, Grid, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function FoodBreadcrumb() {
  const { t } = useTranslation();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<{ data: any }>(['getFood', id]);

  const breadcrumbs = [
    <Link key="1" color="inherit" to="/">
      {t('home')}
    </Link>,

    <Typography key="3" color="text.primary" component={Link} to={`/category/${data?.data?.data?.id}`}>
      {data?.data?.data?.name}
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

export default FoodBreadcrumb;
