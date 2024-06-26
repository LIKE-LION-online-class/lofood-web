import SearchInput from '@/components/SearchInput';
import { Box, Button, Grid } from '@mui/material';

export default function Home() {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" height="500px">
      <Grid item xs={3}>
        <Box display="flex" justifyContent="center">
          <SearchInput />
          <Button variant="contained" color="primary">
            Search
          </Button>
          <p>von-test-homepage</p>
        </Box>
      </Grid>
    </Grid>
  );
}
