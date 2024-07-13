import { tokenAtom, userInfoAtom } from '@/atom';
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Dialog,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import {
  IconBell,
  IconCar,
  IconHistory,
  IconLogout,
  IconPaywall,
  IconSettings,
  IconUserCircle,
} from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function index() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [, setToken] = useAtom(tokenAtom);
  const [, setUserInfo] = useAtom(userInfoAtom);
  const tabs = [
    {
      label: 'Profile',
      to: '/account/profile',
      icon: <IconUserCircle size={20} />,
    },
    {
      label: 'Password',
      to: '/account/password',
      icon: <IconSettings size={20} />,
    },
    {
      label: 'Notification',
      to: '/account/notification',
      icon: <IconBell size={20} />,
    },
    {
      label: 'Payment',
      to: '/account/payment',
      icon: <IconPaywall size={20} />,
    },
    {
      label: 'Shipping',
      to: '/account/shipping',
      icon: <IconCar size={20} />,
    },
    {
      label: 'History',
      to: '/account/history',
      icon: <IconHistory size={20} />,
    },
    {
      label: 'Logout',
      to: '/account/logout',
      icon: <IconLogout size={20} />,
      onClick: (event: any) => {
        event.preventDefault();
        setOpen(true);
      },
    },
  ];

  const handleLogout = () => {
    setOpen(false);
    setToken(RESET);
    setUserInfo(RESET);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card elevation={0}>
                <CardHeader
                  title="Setting"
                  titleTypographyProps={{
                    variant: 'h3',
                  }}
                />
                <List dense>
                  {tabs.map((tab) => (
                    <ListItemButton
                      key={tab.label}
                      onClick={tab.onClick}
                      component={Link}
                      to={tab.to}
                      sx={{
                        backgroundColor: pathname === tab.to ? '#ddd' : 'inherit',
                      }}
                    >
                      <ListItemIcon>{tab.icon}</ListItemIcon>
                      <ListItemText>{tab.label}</ListItemText>
                    </ListItemButton>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card elevation={0}>
                <CardContent>
                  <Outlet />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={() => {}}>
        <DialogContent>
          <DialogContentText>Are you sure you want to logout?</DialogContentText>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleLogout} variant="contained" disableElevation>
              Logout
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Container>
  );
}

export default index;
