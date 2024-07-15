import { getCategoriesHttp } from '@/api/category';
import SkeletonBox from '@/components/SkeletonBox';
import { Card, CardHeader, Grid, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { IconChevronRight } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function ListCategory() {
  const { t } = useTranslation();
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

  const emoji = ['🥤', '🍙', '🧋', '🍓', '☕', '🍜', '🍱', '🍦'];

  const renderList = () => {
    return (
      <List dense disablePadding>
        {data?.data?.map((item: any, index: number) => (
          <ListItemButton
            key={item?.id}
            component={Link}
            to={`/category/${item?.id}`}
            // sx={id === item?.id ? { backgroundColor: '#ddd' } : {}}
          >
            <ListItemText
              primary={emoji[index]}
              sx={{
                maxWidth: '30px',
              }}
            />
            <ListItemText primary={item.name} />
            <ListItemIcon>
              <IconChevronRight size={16} />
            </ListItemIcon>
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
