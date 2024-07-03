import { AppBar, Box, Typography, Button, IconButton, Container, Grid, Stack } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { AppContext } from "../context/AppContext.tsx";
import { center } from '@turf/turf';



const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, setIsOpen, toogleSideBar } = useContext(AppContext);

  const { pathname } = useLocation();
  return (
    <>
      <AppBar className='main-header' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: '110px', justifyContent: 'center', borderBottom: '1px solid #ccc' }} elevation={0}>
        <Container maxWidth="lg">
          {
            !pathname.includes('/gio-hang') ? <Grid container sx={{ alignItems: 'center' }} pb={2} pt={2}>
              <Grid item xs={8} className="navigation">
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                  <Grid item>
                    <Typography variant="h2" noWrap component="p">
                      <Link to={`/`} style={{ textDecoration: 'none', color: 'black', fontSize: '0px', display: 'block' }}>
                        <img width="78" height="78" src="../public/kfc-logo.svg" alt="avatar" />
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" noWrap component="p" sx={{ paddingBottom: '5px' }}>
                      <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: 'black' }} className={pathname.includes('/thuc-don') ? 'active' : ''}>
                        Thực đơn
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" noWrap component="p" sx={{ paddingBottom: '5px' }}>
                      <Link to={`/he-thong-nha-hang`} style={{ textDecoration: 'none', color: 'black' }} className={pathname.includes('/he-thong-nha-hang') ? 'active' : ''}>
                        Hệ Thống nhà hàng
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>

              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                  <Grid item>
                    <Link to={`/auth/login`} color="inherit">
                      <i className="icon-login"></i>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" noWrap component="div">
                      <Link to={`/gio-hang`} style={{ textDecoration: 'none', color: 'black' }} className="mat-pripple basket">
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton edge="start" color="inherit" aria-label="menu"
                      onClick={toogleSideBar}>
                      <MenuIcon sx={{ width: '1.5em', height: '1.5em' }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid> : <Stack spacing={2} direction="row" justifyContent={'space-between'} pb={2} pt={2}>
              <Button variant="outlined" color="inherit" onClick={() => navigate(-1)}>Quay lại menu</Button>
              <Typography variant="h2" noWrap component="p">
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>
                  <img height="43" src="../src/assets/logo-kfc.png" alt="avatar" />
                </Link>
              </Typography>
              <Button component={Link} to="/auth/login" color="inherit">
                <i className="icon-login"></i>
              </Button>
            </Stack>
          }
        </Container>
      </AppBar>
      <Box sx={{ textAlign: 'center', bgcolor: 'black', paddingTop: '111px' }} >
        <Typography variant="h4" component="p" color="white" p={1}>
          Nhận tại nhà hàng theo địa chỉ:abc
        </Typography>
      </Box>
    </>

  );
};

export default NavigationBar;
