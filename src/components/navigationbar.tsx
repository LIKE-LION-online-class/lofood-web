import { AppBar, Toolbar, Typography, Button, IconButton,Container,Grid  } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import {AppContext} from "../context/AppContext.tsx";

const NavigationBar = () => {

  const{isOpen,setIsOpen,toogleSideBar}= useContext(AppContext);

  return (

    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
        <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="h6" noWrap component="div">
                  <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                    <img width="78" height="78" src="../public/kfc-logo.svg" alt="avatar" />
                  </Link>
                </Typography>

              </Grid>
              <Grid item>
                <Typography variant="h6" noWrap component="div">
                  <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: 'black' }}>
                    Thực đơn
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" noWrap component="div">
                  <Link to={`/he-thong-nha-hang`} style={{ textDecoration: 'none', color: 'black' }}>
                    Hệ Thống nhà hàng
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" noWrap component="div">
                  <Link to={`/khuyen-mai`} style={{ textDecoration: 'none', color: 'black' }}>
                    Khuyến mãi
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="h6" noWrap component="div">
                  <Link to={`/khuyen-mai`} style={{ textDecoration: 'none', color: 'black' }}>
                    Giỏ hàng
                  </Link>
                </Typography>
              </Grid>
              <Grid item>
                <Button component={Link} to="/auth/login" color="inherit">
                  Log in
                </Button>
              </Grid>
              <Grid item>
                <Button component={Link} to="/auth/register" color="inherit">
                  Register
                </Button>
              </Grid>
              <Grid item>
                <IconButton className="von-test" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                            onClick={toogleSideBar}>
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Container>
    </AppBar>

  );
};

export default NavigationBar;
