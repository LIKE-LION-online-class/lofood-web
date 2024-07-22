import { addressAtom } from '@/atom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconMap, IconMapPin, IconSearch } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import AuthButton from './AuthButton';
import SelectLanguage from './SelectLanguage';

const NavigationBar = () => {
  const { t } = useTranslation();
  const [address] = useAtom(addressAtom);
  const navigate = useNavigate();
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      navigate(`/search?q=${event.target.value}`);
    }
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
      <Box height={40} bgcolor="black" color="white">
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center">
            <Button color="inherit" component={Link} to="/auth/register">
              {t('registerStore')}
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl" disableGutters>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              FoodMap
            </Link>
          </Typography>
          <Box ml={2}>
            {address.city && (
              <Button startIcon={<IconMapPin size={16} />} color="inherit">
                {t('deliveringTo')}:
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  ml={1}
                  sx={{
                    textDecoration: 'underline',
                  }}
                >
                  {`${address.suburb}, ${address.city}, ${address.country}`}
                </Typography>
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <TextField
            size="small"
            fullWidth
            placeholder={t('search')}
            onKeyDown={handleKeyPress}
            sx={{
              maxWidth: 500,
              '& .MuiOutlinedInput-root': {
                borderRadius: 30,
                backgroundColor: 'white',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size={18} />
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <SelectLanguage />
          <Box mr={1} />
          <AuthButton />
          <Tooltip title="Map view">
            <IconButton component={Link} to="/map">
              <IconMap size={18} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
