import { CardContentNoPadding } from '@/components/CardContentNoPadding';
import { Button, Card, Grid } from '@mui/material';
import { IconCloudStorm, IconFlame } from '@tabler/icons-react';

function Promo() {
  const titles = [
    {
      id: 1,
      title: 'Uy tín',
      startIcon: <IconFlame />,
    },
    {
      id: 2,
      title: 'Giao hàng nhanh',
      startIcon: <IconCloudStorm />,
    },
    {
      id: 3,
      title: 'Gía siêu rẻ',
    },
  ];

  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardContentNoPadding>
          {titles.map((item) => (
            <Button variant="text" color="inherit" startIcon={item.startIcon} key={item.id}>
              {item.title}
            </Button>
          ))}
        </CardContentNoPadding>
      </Card>
    </Grid>
  );
}

export default Promo;
