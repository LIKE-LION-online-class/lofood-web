import { cartAtom } from '@/atom';
import StyledDataGrid from '@/components/StyledDataGrid';
import { IFood } from '@/interfaces';
import { handleCart } from '@/libs';
import { Box, Card, CardHeader, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { IconMinus, IconPlus, IconTrash } from '@tabler/icons-react';
import { useAtom } from 'jotai';
import { useTranslation } from 'react-i18next';

function ListCartItem() {
  const [cart, setCart] = useAtom(cartAtom);

  const { t } = useTranslation();

  const handleAddToCart = (food: IFood) => {
    setCart(handleCart({ cart, food, type: 'increment' }));
  };

  const handleRemoveFromCart = (food: IFood) => {
    setCart(handleCart({ cart, food, type: 'decrement' }));
  };

  const handleRemoveItemFromCart = (food: IFood) => {
    setCart(handleCart({ cart, food, type: 'remove' }));
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: t('name'),
      width: 200,
      renderCell: (params) => (
        <Card
          elevation={0}
          sx={{
            backgroundColor: 'transparent',
            height: '100%',
          }}
        >
          <Stack direction="row" alignItems="center" gap={2} height="100%">
            <CardMedia
              image={params.row.image}
              sx={{
                width: 40,
                height: 40,
              }}
            />
            <Typography>{params.row.name}</Typography>
          </Stack>
        </Card>
      ),
    },
    { field: 'description', headerName: t('description'), width: 150 },
    {
      field: 'price',
      headerName: t('price'),
      type: 'number',
      width: 200,
    },
    {
      field: 'quantity',
      headerName: t('quantity'),
      align: 'center',
      headerAlign: 'center',
      type: 'number',
      width: 200,
      renderCell: (params) => (
        <Box>
          <IconButton
            onClick={(event) => {
              event.preventDefault();
              handleRemoveFromCart(params.row as IFood);
            }}
          >
            <IconMinus size={18} />
          </IconButton>
          <Box component="span" sx={{ padding: '0 8px' }}>
            {params.row.quantity}
          </Box>
          <IconButton
            onClick={(event) => {
              event.preventDefault();
              handleAddToCart(params.row as IFood);
            }}
          >
            <IconPlus size={18} />
          </IconButton>
        </Box>
      ),
    },
    {
      field: 'total',
      headerName: t('total'),
      type: 'number',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 110,
      align: 'right',
      headerAlign: 'right',
      renderCell: (params) => (
        <IconButton
          onClick={(event) => {
            event.preventDefault();
            handleRemoveItemFromCart(params.row as IFood);
          }}
        >
          <IconTrash size={14} />
        </IconButton>
      ),
    },
  ];

  const rows = cart.items.map((item: IFood) => ({
    id: item.id,
    name: item.name,
    image: item.image,
    description: item.description,
    price: item.price,
    quantity: item.quantity,
    total: item.quantity * item.price,
  }));

  return (
    <StyledDataGrid
      columns={columns}
      rows={rows}
      hideFooter
      hideFooterPagination
      hideFooterSelectedRowCount
      checkboxSelection
    />
  );
}

function ListCartProduct() {
  const { t } = useTranslation();
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
          <ListCartItem />
        </Card>
      </Grid>
    </Grid>
  );
}

export default ListCartProduct;
