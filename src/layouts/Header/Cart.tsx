import { cartAtom } from '@/atom';
import { Alert, Box, Button, IconButton, Popover, styled } from '@mui/material';
import Badge from '@mui/material/Badge';
import { IconBasket, IconCheck } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const TransparentAlert = styled(Alert)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
}));

function Cart() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [cart, setCart] = useAtom(cartAtom);
  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setCart({ ...cart, open: false });
  };

  const handleClick = () => {
    handleClose();
    navigate('/cart');
  };

  useEffect(() => {
    setAnchorEl(ref.current);
  }, []);

  return (
    <React.Fragment>
      <IconButton size="small" ref={ref} component={Link} to="/cart">
        <Badge badgeContent={cart?.items?.length} color="error">
          <IconBasket size={18} />
        </Badge>
      </IconButton>

      <Popover
        open={cart.open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Box p={2} width={300}>
          <TransparentAlert icon={<IconCheck fontSize="inherit" />} severity="success">
            Thêm vào giỏ hàng thành công
          </TransparentAlert>
          <Button variant="contained" disableElevation color="error" fullWidth onClick={handleClick}>
            {t('goToCart')}
          </Button>
        </Box>
      </Popover>
    </React.Fragment>
  );
}

export default Cart;
