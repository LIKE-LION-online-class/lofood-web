import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface IProductCardCart {
  image: string;
  title?: string;
  description?: string;
}

export default function ProductCardCart({ image, title, description }: IProductCardCart) {
  return (
    <Card sx={{ display: 'flex', width: 360 }} elevation={0}>
      <CardMedia
        component="img"
        sx={{ width: 140, maxHeight: 100, borderRadius: 1 }}
        image={image}
        alt="Live from space album cover"
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
