import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

interface IImage {
  img: string;
  title: string;
  cols?: number;
  rows?: number;
}

interface IQuiltedImageListProps {
  images: IImage[];
}

export default function QuiltedImageList({ images }: IQuiltedImageListProps) {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={300}>
      {images.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img {...srcset(item.img, 300, item.rows, item.cols)} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
