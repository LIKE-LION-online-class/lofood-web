import RestaurantHead from '@/pages/RestaurantPage/components/RestaurantHead';
import RestaurantHomeFood from '@/pages/RestaurantPage/components/RestaurantHomeFood';
import { Avatar, Button, CardActionArea, CardHeader, Drawer, Popover } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import React, { useState } from 'react';

interface RecipeReviewCardProps {
  id?: string;
  name?: string;
  description?: string;
  image: string;
  address?: string;
  phoneNumber?: string;
}

export default function RecipeReviewCard({ id, image, name, description }: RecipeReviewCardProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    handleClose();
    setOpenDrawer(!openDrawer);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/restaurant-6843937-5603506.png?f=webp"
        />
      </Button>
      <Drawer open={openDrawer} onClose={toggleDrawer} PaperProps={{ style: { width: '30%' } }}>
        <RestaurantHead id={id} />
        <RestaurantHomeFood id={id} />
      </Drawer>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        PaperProps={{ sx: { backgroundColor: 'transparent', boxShadow: 'none' } }}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Card sx={{ width: 240, overflow: 'hidden' }} elevation={0}>
          <CardActionArea onClick={toggleDrawer}>
            <CardMedia component="img" height="100" image={image} alt="Paella dish" />
            <CardHeader title={name} subheader={description} />
          </CardActionArea>
        </Card>
      </Popover>
    </React.Fragment>
  );
}
