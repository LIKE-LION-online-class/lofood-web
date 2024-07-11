import { AppBar, Toolbar, Typography, Button, IconButton, Container, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Box, ThemeProvider } from '@mui/material';
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <>
      {!pathname.includes('/auth/register') && !pathname.includes('/auth/login') ? (
        <Box
          sx={{
            bgcolor: '#202124',
            color: 'white',
          }}
          pb={4}
          pt={4}
        >
          <Container maxWidth="lg">
            <Grid container direction="row" justifyContent="space-around">
              <Grid>
                <Typography variant="h6" noWrap component="h6" fontWeight="bold">
                  Download App
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
export default Footer;
