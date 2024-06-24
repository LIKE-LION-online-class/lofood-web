import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from './SearchInput';

const NavigationBar = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            LoFood
          </Link>
        </Typography>

        <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none' }}>
          Home
        </Button>

        <Box sx={{ flexGrow: 1 }} />
        <SearchInput />
        <Box sx={{ flexGrow: 1 }} />
        <Button component={Link} to="/auth/login" color="inherit">
          Log in
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
