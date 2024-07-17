import { addressAtom } from '@/atom';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';

function AddressCheckout() {
  const [address] = useAtom(addressAtom);
  const { t } = useTranslation();
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title={t('deliveringTo')}
          titleTypographyProps={{
            variant: 'h3',
          }}
          action={
            <Typography variant="body2" color="blue">
              Thay đổi
            </Typography>
          }
        />
        <CardContent>
          <Typography>{`${address.suburb}, ${address.city}`}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AddressCheckout;
