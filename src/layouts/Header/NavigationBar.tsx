import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { IconMap, IconMapPin, IconSearch } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import SelectLanguage from './SelectLanguage';
import { useAtom } from 'jotai';
import { addressAtom } from '@/atom';

const NavigationBar = () => {
  const { t } = useTranslation();
  const [address] = useAtom(addressAtom);

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} elevation={0}>
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
                Giao đến:
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
          <AuthButton />
          <Tooltip title="Map view">
            <IconButton component={Link} to="/map">
              <IconMap size={20} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
