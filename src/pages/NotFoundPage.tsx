import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const NotFoundPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      bgcolor="background.default"
      color="text.primary"
      p={2}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for doesn't exist or an other error occurred.
      </Typography>
      <Button variant="contained" color="primary" startIcon={<HomeIcon />} component={Link} to="/" disableElevation>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
