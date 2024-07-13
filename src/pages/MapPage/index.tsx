import User from '@/layouts/Header/User';
import AppMap from './components/Map';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, IconButton, Stack } from '@mui/material';
import { IconHomeFilled } from '@tabler/icons-react';

import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
      }}
    >
      <Grid item xs={12}>
        <Box position="absolute" top={8} left={2} zIndex={99}>
          <Stack direction="row" spacing={1}>
            <Link to="/">
              <IconButton>
                <IconHomeFilled size={20} />
              </IconButton>
            </Link>

            <Button
              variant="contained"
              sx={{
                borderRadius: 99,
                textTransform: 'none',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': { backgroundColor: 'white' },
              }}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>

            <Button
              variant="contained"
              sx={{
                borderRadius: 99,
                textTransform: 'none',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': { backgroundColor: 'white' },
              }}
              startIcon={<ExploreIcon />}
            >
              Near by
            </Button>
          </Stack>
        </Box>

        <Box position="absolute" bottom={32} left={8} zIndex={99}>
          <User />
        </Box>
        <AppMap />
      </Grid>
    </Grid>
  );
}
