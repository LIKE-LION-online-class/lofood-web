import { cancelOrderHttp, getOrderUserLogged } from '@/api/order';
import { notify } from '@/components/CustomToast';
import StyledDataGrid from '@/components/StyledDataGrid';
import { formatVND } from '@/libs';
import {
  Box,
  Card,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Popover,
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { IconDotsVertical } from '@tabler/icons-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import AccountLayout from '../components/AccountLayout';

const getStatus = (status: string): { color: 'warning' | 'success' | 'error' | 'info' | 'default'; text: string } => {
  switch (status) {
    case 'CANCEL':
      return { color: 'warning', text: 'CANCEL' };
    case 'COMPLETED':
      return { color: 'success', text: 'COMPLETED' };
    case 'FAILED':
      return { color: 'default', text: 'FAILED' };
    case 'PROCESSING':
      return { color: 'info', text: 'PROCESSING' };
    case 'SHIPPED':
      return { color: 'info', text: 'SHIPPED' };
    case 'WAITING':
      return { color: 'info', text: 'WAITING' };
    default:
      return { color: 'info', text: 'Waiting' };
  }
};

interface Row {
  id: number;
  totalPrice: number;
  status?: string;
}

const STATUS_FOR_CANCEL = ['PROCESSING'];

const ActionMenu = ({ row }: { row: any }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['cancelOrder', row.id],
    mutationFn: cancelOrderHttp,
    onSuccess: () => {
      notify('Hủy đơn hàng thành công', 'success');
      queryClient.invalidateQueries({ queryKey: ['getOrderUserLogged'] });
    },
  });

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCancelOrder = () => {
    mutate(row.id);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <IconDotsVertical size={12} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List dense disablePadding>
          <ListItemButton onClick={() => console.log('Edit', row.id)} dense>
            <ListItemText primary="Chi tiết" />
          </ListItemButton>
          {STATUS_FOR_CANCEL.includes(row.status) && (
            <ListItemButton onClick={handleCancelOrder} dense>
              <ListItemText primary="Hủy đơn hàng" />
            </ListItemButton>
          )}
        </List>
      </Popover>
    </Box>
  );
};

function index() {
  const { data, isLoading } = useQuery({
    queryKey: ['getOrderUserLogged'],
    queryFn: getOrderUserLogged,
  });

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      filterable: false,
      width: 400,
    },
    {
      field: 'totalPrice',
      headerName: 'Total price',
      width: 200,
      valueFormatter: (value) => {
        return `${formatVND(value)}`;
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 200,
      renderCell: (params) => {
        const { color, text } = getStatus(params.value as string);
        return <Chip label={text} size="small" color={color} />;
      },
    },
    {
      field: 'createDate',
      headerName: 'Create Date',
      width: 200,
      valueFormatter: (value) => {
        return dayjs(value).format('DD/MM/YYYY');
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 50,
      renderCell: (params) => {
        return <ActionMenu row={params.row} />;
      },
    },
  ];

  const initialRows: Row[] = data?.data?.map((item: any) => ({
    id: item.id,
    totalPrice: item.totalPrice,
    status: item.status,
    createDate: item.createDate,
    items: item?.foodOrderResponses?.map((value: any) => ({
      id: value.id,
      priceOrder: value.priceOrder,
      quantity: value.quantity,
      food: value.foodDetailOrderResponse,
    })),
  }));

  return (
    <AccountLayout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card elevation={0}>
            <CardHeader
              title="Order History"
              titleTypographyProps={{
                variant: 'h3',
              }}
            />
            <StyledDataGrid
              columns={columns}
              autoHeight
              rowHeight={56}
              rows={initialRows}
              loading={isLoading}
              slotProps={{
                loadingOverlay: {
                  variant: 'skeleton',
                  noRowsVariant: 'skeleton',
                },
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </AccountLayout>
  );
}

export default index;
