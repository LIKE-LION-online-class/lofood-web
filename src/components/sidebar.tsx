import { Box, Drawer, IconButton, Toolbar } from '@mui/material';
import {AppContext} from "../context/AppContext.tsx";
import React, {useContext} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 300;

const SideBar = () => {
  const{isOpen,toogleSideBar}= useContext(AppContext);
  if(!isOpen) return null;

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        position: 'fixed',
        zIndex:9999,
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <IconButton className="von-test" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}
                    onClick={toogleSideBar}>
          <MenuIcon />
        </IconButton>
      </Box>
    </Drawer>
  );
};

export default SideBar;
