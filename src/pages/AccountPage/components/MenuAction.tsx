import { tokenAtom, userInfoAtom } from '@/atom';
import {
  Button,
  Card,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuAction() {
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
      label: 'Order',
      to: '/account/history',
      icon: <IconHistory size={20} />,
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
      label: 'Password',
      to: '/account/password',
      icon: <IconSettings size={20} />,
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
    <React.Fragment>
      <Grid item xs={12}>
        <Card elevation={0}>
          <CardHeader
            title="Setting"
            titleTypographyProps={{
              variant: 'h3',
            }}
          />
          <List dense disablePadding>
            {tabs.map((tab) => (
              <ListItemButton key={tab.label} onClick={tab.onClick} component={Link} to={tab.to}>
                <ListItemIcon>{tab.icon}</ListItemIcon>
                <ListItemText>{tab.label}</ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Card>
      </Grid>
      <Dialog open={open} onClose={() => {}}>
        <DialogContent>
          <DialogContentText>Are you sure you want to logout?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleLogout} variant="contained" disableElevation>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default MenuAction;
