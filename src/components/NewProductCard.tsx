import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
interface RecipeReviewCardProps {
  image: string;
}

export default function NewProductCard({ image }: RecipeReviewCardProps) {
  return (
    <Card sx={{ overflow: 'hidden',padding:'5px'}}>
      <CardMedia component="img" height="223" image={image} alt="Paella dish" />
      <CardContent>
        <Stack direction="row" spacing={2} justifyContent="space-between" pb={2}>
          <Typography gutterBottom variant="h3" component="h3">
            Lizard
          </Typography>
          <Typography gutterBottom variant="h3" component="h3">
            25.000
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" component="p" pb={2}>
          2 Miếng Gà + 1 Burger Zinger + 2 Pepsi (lớn)
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button variant="outlined" color="inherit" href="#contained-buttons"  size="large" sx={{borderRadius:'25px'}}>
            Tùy chỉnh
          </Button>
          <Button variant="contained" color="error" size="large" sx={{borderRadius:'25px'}}>Thêm</Button>
        </Stack>


      </CardContent>
    </Card>
  );
}
