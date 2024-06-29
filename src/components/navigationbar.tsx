import { AppBar, Box, Typography, Button, IconButton,Container,Grid ,Stack } from '@mui/material';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import {AppContext} from "../context/AppContext.tsx";
import { center } from '@turf/turf';



const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const{isOpen,setIsOpen,toogleSideBar}= useContext(AppContext);

  const {pathname}= useLocation();
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0} className="navigation">
        <Container maxWidth="lg">
          {
            !pathname.includes('/gio-hang')?<Grid container sx={{alignItems:'center'}} pb={2} pt={2}>
              <Grid item xs={8}>
                <Grid container spacing={2} sx={{alignItems:'center'}}>
                  <Grid item>
                    <Typography variant="h2" noWrap component="p">
                      <Link to={`/`} style={{ textDecoration: 'none', color: 'black',fontSize:'0px',display:'block' }}>
                        <img width="78" height="78" src="../public/kfc-logo.svg" alt="avatar" />
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" noWrap component="p">
                      <Link to={`/thuc-don`} style={{ textDecoration: 'none', color: 'black' }} className={ pathname.includes('/thuc-don') ? 'active' : ''}>
                        Thực đơn
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" noWrap component="p">
                      <Link to={`/he-thong-nha-hang`} style={{ textDecoration: 'none', color: 'black' }} className={ pathname.includes('/he-thong-nha-hang') ? 'active' : ''}>
                        Hệ Thống nhà hàng
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2" noWrap component="p">
                      <Link to={`/khuyen-mai`} style={{ textDecoration: 'none', color: 'black'}} className={ pathname.includes('/khuyen-mai') ? 'active' : ''}>
                        Khuyến mãi
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>

              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2} sx={{display:'flex',justifyContent: 'flex-end'}}>
                  <Grid item>
                    <Button component={Link} to="/auth/login" color="inherit">
                      <i className="icon-login"></i>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" noWrap component="div">
                      <Link to={`/gio-hang`} style={{ textDecoration: 'none', color: 'black' }} className="mat-pripple basket">
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton className="von-test" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                                onClick={toogleSideBar}>
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>:<Stack spacing={2} direction="row" justifyContent={'space-between'} pb={2} pt={2}>
              <Button variant="outlined" color="inherit"   onClick={() => navigate(-1)}>Quay lại menu</Button>
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
      <Box sx={{textAlign:'center',bgcolor:'black',paddingTop:'85px'}} >
        <Typography variant="h4" component="p" color="white" p={1}>
          Nhận tại nhà hàng theo địa chỉ:abc
        </Typography>
      </Box>
    </>

  );
};

export default NavigationBar;
