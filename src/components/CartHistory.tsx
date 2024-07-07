import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Box, ToggleButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { AppContext } from '../context/AppContext.tsx';
import { useContext, useEffect, useState } from 'react';
import { formatDate } from "../common/format";

const CartHistoryItem = ({ item }) => {
  const { isOpen, toogleSideBar } = useContext(AppContext);
  console.log(item?.foodOrderResponses);


  return (
    <Card sx={{ overflow: 'hidden', padding: '5px' }} className="card-productInBasket">
      <Grid container sx={{ alignItems: 'flex-start' }}>
        <Grid item xs={8}>
          <Grid sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Grid item xs={12} >
              <CardContent>
                <Stack direction="column" pb={2}>
                  <Typography gutterBottom variant="h3" component="h3" className="product-name">
                    Date order: {formatDate(item?.createDate)}
                  </Typography>
                  <Box className="detail-product">
                    <Link
                      href="javascript:void(0)"
                      title="xem-chi-tiet"
                      color="#929191"
                      className="switch"
                      onClick={toogleSideBar}
                    >
                      Detail
                    </Link>
                    {isOpen ? (
                      <Typography variant="p" component="div" className="content">
                        {item?.foodOrderResponses.map((item) => {
                          return <>
                            <ToggleButton value="bold" aria-label="bold" disabled>
                              {item?.quantity}
                            </ToggleButton>
                            {item?.foodDetailOrderResponse?.name}({item?.priceOrder * item?.quantity}$) <br /></>
                        })}
                      </Typography>
                    ) : (
                      ''
                    )}
                  </Box>
                </Stack>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} pt={4}>
          <CardActions>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography gutterBottom variant="h3" component="h3" className="price">
                Total : {item.totalPrice}
              </Typography>
            </Stack>
          </CardActions>
          <CardActions>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Typography gutterBottom variant="h3" component="h3" className="price">
                Status : {item?.status}
              </Typography>
            </Stack>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
export default CartHistoryItem;
