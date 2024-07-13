import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface RecipeReviewCardProps {
  image: string;
}

export default function RecipeReviewCard({ image }: RecipeReviewCardProps) {
  return (
    <Card sx={{ width: 240, borderRadius: 4, overflow: 'hidden' }}>
      <CardMedia component="img" height="100" image={image} alt="Paella dish" />
      {/* <CardHeader title="Shrimp and Chorizo Paella" /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party.
        </Typography>
      </CardContent>
    </Card>
  );
}
