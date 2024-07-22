import { Card, CardContent, CardHeader, FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@mui/material';

function PaymentMethod() {
  return (
    <Grid item xs={12}>
      <Card elevation={0}>
        <CardHeader
          title="Phương thức thanh toán"
          titleTypographyProps={{
            variant: 'h3',
          }}
        />
        <CardContent>
          <FormControl>
            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="cash" name="radio-buttons-group">
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PaymentMethod;
