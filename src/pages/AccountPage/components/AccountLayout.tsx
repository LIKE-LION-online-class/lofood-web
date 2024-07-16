import { Card, Container, Grid } from '@mui/material';
import MenuAction from './MenuAction';

interface AccountLayoutProps {
  children?: React.ReactNode;
}

function AccountLayout({ children }: AccountLayoutProps) {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={3}>
          <Grid container spacing={3}>
            <MenuAction />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card elevation={0}>{children}</Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AccountLayout;
