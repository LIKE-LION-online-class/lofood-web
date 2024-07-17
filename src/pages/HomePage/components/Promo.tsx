import { Button, Card, Grid } from '@mui/material';
import { IconCloudStorm, IconCoin, IconFlame } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

function Promo() {
  const { t } = useTranslation();
  const titles = [
    {
      id: 1,
      title: t('hotDeal'),
      startIcon: <IconFlame size={18} />,
    },
    {
      id: 2,
      title: t('fastDelivery'),
      startIcon: <IconCloudStorm size={18} />,
    },
    {
      id: 3,
      title: t('bestPrice'),
      startIcon: <IconCoin size={18} />,
    },
  ];

  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        {titles.map((item) => (
          <Button variant="text" color="inherit" startIcon={item.startIcon} key={item.id}>
            {item.title}
          </Button>
        ))}
      </Card>
    </Grid>
  );
}

export default Promo;
