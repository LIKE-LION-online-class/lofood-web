import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface DanhMucMonAnProps {
  image: string;
  text:string;
}

export default function DanhMucMonAn({ image,text }: DanhMucMonAnProps) {
  return (
    <Card sx={{ width: '100%', borderRadius: 2, overflow: 'hidden' }}>
      <CardMedia component="img" height="223" image={image} alt="Paella dish" />
      <CardContent sx={{ paddingBottom:'16px !important' }}>
        <Typography gutterBottom variant="h4" component="h4" className="sub-title with-arrow" sx={{positon:'relative'}}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
