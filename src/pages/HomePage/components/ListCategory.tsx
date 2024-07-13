import { getCategoriesHttp } from '@/api/category';
import SkeletonBox from '@/components/SkeletonBox';
import { Card, CardHeader, Grid, List, ListItemButton, ListItemText } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function ListCategory() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategoriesHttp,
  });

  if (isLoading) {
    return (
      <Grid item xs={12}>
        <SkeletonBox height={300} />
      </Grid>
    );
  }

  if (!data?.data?.length) {
    return null;
  }

  const renderList = () => {
    return (
      <List dense>
        {data?.data?.map((item: any) => (
          <ListItemButton
            key={item?.id}
            component={Link}
            to={`/category/${item?.id}`}
            sx={id === item?.id ? { backgroundColor: '#ddd' } : {}}
          >
            <ListItemText key={item.id} primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    );
  };

  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader title={t('category')} titleTypographyProps={{ variant: 'h3' }} />
        {renderList()}
      </Card>
    </Grid>
  );
}

export default ListCategory;
