import { cartAtom } from '@/atom';
import { Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { useAtom } from 'jotai';

function CheckoutNote() {
  const [cart, setCart] = useAtom(cartAtom);
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title="Note"
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
        <CardContent>
          <TextField
            fullWidth
            label="Note"
            multiline
            rows={4}
            onChange={(e: any) => {
              setCart({
                ...cart,
                note: e.target.value,
              });
            }}
          />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CheckoutNote;
