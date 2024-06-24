import { Box, Drawer, Toolbar } from '@mui/material';

const drawerWidth = 300;

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}></Box>
    </Drawer>
  );
};

export default SideBar;
