import { addToCart, formatVND, removeFromCart, removeItemFromCart } from '@/libs';
import {
  Card,
  CardHeader,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import CheckboxList from './CheckList';
import ProductCardCart from './ProductCardCart';
import { useAtom } from 'jotai';
import { cartAtom } from '@/atom';
import { CardContentNoPadding } from '@/components/CardContentNoPadding';
import { IFood } from '@/interfaces';
import { useTranslation } from 'react-i18next';

function ListCartProduct() {
  const [cart, setCart] = useAtom(cartAtom);
  const { t } = useTranslation();
  const handleAddToCart = (food: IFood) => {
    const newCart = addToCart(cart, food);
    setCart({ ...newCart, open: false });
  };

  const handleRemoveFromCart = (food: IFood) => {
    const newCart = removeFromCart(cart, food);
    setCart(newCart);
  };

  const handleRemoveItemFromCart = (food: IFood) => {
    const newCart = removeItemFromCart(cart, food);
    setCart(newCart);
  };

  const renderList = () => {
    return cart.items.map((item: IFood) => (
      <Grid item xs={12}>
        <Card elevation={0}>
          <CardContentNoPadding>
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" onClick={() => handleRemoveItemFromCart(item)}>
                    <IconTrash size={16} />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemIcon>
                  <Checkbox edge="start" tabIndex={-1} disableRipple />
                </ListItemIcon>
                <ProductCardCart image={item.image} title={item.name} description={item.description} />
                <ListItemText>
                  <Typography fontWeight={600} width="42px">
                    {formatVND(item.price)}
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Stack direction="row" sx={{ border: '1px solid #ddd', width: 'fit-content' }} borderRadius={99}>
                    <IconButton onClick={() => handleRemoveFromCart(item)}>
                      <IconMinus size={14} />
                    </IconButton>
                    <Stack justifyContent="center" alignItems="center" width={32}>
                      {item.quantity}
                    </Stack>
                    <IconButton onClick={() => handleAddToCart(item)}>
                      <IconPlus size={14} />
                    </IconButton>
                  </Stack>
                </ListItemText>
                <ListItemText>
                  <Chip label={formatVND(item.quantity * item.price)} size="small" color="error" />
                </ListItemText>
              </ListItem>
            </List>
          </CardContentNoPadding>
        </Card>
      </Grid>
    ));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card elevation={0}>
          <CardHeader
            title={t('cart')}
            titleTypographyProps={{
              variant: 'h3',
            }}
          />
          <CardContentNoPadding>
            <CheckboxList />
          </CardContentNoPadding>
        </Card>
      </Grid>
      {renderList()}
    </Grid>
  );
}

export default ListCartProduct;
