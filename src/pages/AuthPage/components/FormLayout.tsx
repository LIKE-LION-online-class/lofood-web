import { Box, Card, CardContent, CardHeader, Container, Grid } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}
function Layout({ children, title, subtitle }: LayoutProps) {
  return (
    <Grid container alignItems="center" bgcolor="white">
      <Grid item xs={6}>
        <Box
          height="100vh"
          sx={{
            backgroundImage: 'url(/assets/signin.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'cover',
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Container maxWidth="xs">
          <Card elevation={0} sx={{ bgcolor: 'white' }}>
            <CardHeader
              title={title}
              titleTypographyProps={{ variant: 'h2' }}
              subheader={subtitle}
              subheaderTypographyProps={{ variant: 'subtitle2' }}
            />
            <CardContent>{children}</CardContent>
          </Card>
        </Container>
      </Grid>
    </Grid>
  );
}

export default Layout;
