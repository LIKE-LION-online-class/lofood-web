import { AppBar, Box, Typography, Button, IconButton, Container, Grid, Stack, Hidden } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.tsx';
import { center } from '@turf/turf';
import Profile from './Profile.jsx';

import { Food } from '@/model/Food';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, setIsOpen, toogleSideBar } = useContext(AppContext);
  const cart: Food[] = useSelector((state) => state?.cart?.CartArr);
  const { pathname } = useLocation();
  return (
    <>
      <AppBar
        className="main-header"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          height: '110px',
          justifyContent: 'center',
          borderBottom: '1px solid #ccc',
        }}
        elevation={0}
      >
        <Container maxWidth="lg">
          {!pathname.includes('/gio-hang') && !pathname.includes('/auth/login') ? (
            <Grid container sx={{ alignItems: 'center' }} pb={2} pt={2}>
              <Grid item xs={8} className="navigation">
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                  <Grid item sx={{ display: { sm: 'block', md: 'none' } }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={toogleSideBar}>
                      <MenuIcon sx={{ width: '1.5em', height: '1.5em' }} />
                    </IconButton>
                  </Grid>

                  <Grid item>
                    <Typography variant="h2" noWrap component="p">
                      <Link
                        to={`/`}
                        style={{ textDecoration: 'none', color: 'black', fontSize: '0px', display: 'block' }}
                      >
                        <img width="100" height="100" src="/assets/logo-happy-restaurant.png" alt="avatar" />
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item sx={{ display: { sm: 'none', md: 'block' } }}>
                    <Typography variant="h2" noWrap component="p" sx={{ paddingBottom: '5px' }}>
                      <Link
                        to={`/thuc-don`}
                        style={{ textDecoration: 'none', color: 'black' }}
                        className={pathname.includes('/thuc-don') ? 'active' : ''}
                      >
                        Menu
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item sx={{ display: { sm: 'none', md: 'block' } }}>
                    <Typography variant="h2" noWrap component="p" sx={{ paddingBottom: '5px' }}>
                      <Link
                        to={`/he-thong-nha-hang`}
                        style={{ textDecoration: 'none', color: 'black' }}
                        className={pathname.includes('/he-thong-nha-hang') ? 'active' : ''}
                      >
                        Restaurant map
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Grid item>
                    <Stack spacing={1} direction="row" alignItems="center">
                      <Profile />
                    </Stack>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" noWrap component="div">
                      <Link
                        to={`/gio-hang`}
                        style={{ textDecoration: 'none', color: 'black', fontSize: '15px' }}
                        className="mat-pripple basket"
                      >
                        {cart.length}
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
          {pathname.includes('/gio-hang') ? (
            <Stack spacing={2} direction="row" justifyContent={'space-between'} pb={2} pt={2}>
              <Button variant="outlined" color="inherit" onClick={() => navigate(-1)}>
                Back to menu
              </Button>
              <Typography variant="h2" noWrap component="p">
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <img height="43" src="/assets/logo-kfc.png" alt="avatar" />
                </Link>
              </Typography>
            </Stack>
          ) : (
            <> </>
          )}
        </Container>
      </AppBar>
      <Box sx={{ textAlign: 'center', bgcolor: 'black', paddingTop: '111px' }}>
        <Typography variant="h4" component="p" color="white" p={1}>
          Address: ABCDXYZ
        </Typography>
      </Box>
    </>
  );
};

export default NavigationBar;
