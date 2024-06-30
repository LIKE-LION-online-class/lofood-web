import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid ,Box} from '@mui/material';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import {AppContext} from "../context/AppContext.tsx";
import { useContext } from 'react';
import {useReducer} from "react";

interface RecipeReviewCardProps {
  image: string;
}

const ProductInBasket = ({ image }: RecipeReviewCardProps)=> {
  const{isOpen,toogleSideBar}= useContext(AppContext);
  const reducer =(state: number, action: any)=>{
    switch(action){
      case 'increment':
        return state + 1;
      case 'decrement':
        return state -1;
      default:
        return  state;
    }

  }

  const [count, dispatch]= useReducer(reducer,1);

  return (
    <Card sx={{ overflow: 'hidden',padding:'5px'}} className="card-productInBasket">
      <Grid container sx={{alignItems:'flex-start'}}>
        <Grid item xs={8}>
          <Grid sx={{display:'flex',alignItems:'flex-start'}}>
            <Grid item xs={6}><CardMedia component="img" width='204' height="205" image={image} alt="Paella dish" /></Grid>
            <Grid item xs={6} pt={4}>
              <CardContent>
                <Stack direction="column" pb={2}>
                  <Typography gutterBottom variant="h3" component="h3" className="product-name">
                    COMBO SẮC MÀU A
                  </Typography>
                  <Box className="detail-product">
                    <Link href="javascript:void(0)" title="xem-chi-tiet" color="#929191" className="switch" onClick={toogleSideBar}>Xem chi tiết</Link>
                    {
                      isOpen ? <Typography variant="p" component='div' className="content">
                        Gà Rán (2 miếng)
                        2 x Gà Giòn Cay
                        1 Ly Pepsi (lớn)
                        1 Bộ Tranh Tô Màu
                      </Typography>:''
                    }
                  </Box>
                </Stack>
                <Stack direction="row">
                  <Button title="Xóa"> Xóa</Button>
                </Stack>
              </CardContent>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} pt={4}>
          <CardActions>
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Stack direction="row" className="box-action">
                <Link color="inherit" data-btn-type="btn-decrement" onClick={() => dispatch('decrement')}><i
                  className="icon-decrement"></i></Link>
                <input className="quantity" name="quantity" type="text" size="1" value={count<0 || count ===0 ? 1 : count}/>
                <Link color="error" data-btn-type="btn-increment" onClick={() => dispatch('increment')}><i
                  className="icon-increment"></i></Link>
              </Stack>
              <Typography gutterBottom variant="h3" component="h3" className="price">
                25.000
              </Typography>
            </Stack>
          </CardActions>

        </Grid>
      </Grid>

    </Card>
  );
}
export  default ProductInBasket;