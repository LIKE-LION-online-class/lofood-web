import { cancelOrderHttp, getOrderByIdHttp } from '@/api/order';
import { formatVND } from '@/libs';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { IconCheck, IconCoin } from '@tabler/icons-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function index() {
  const { id } = useParams();
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ['cancelOrder', id],
    mutationFn: cancelOrderHttp,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['getOrder', id],
      });
      setOpen(false);
    },
  });

  const [open, setOpen] = React.useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ['getOrder', id],
    queryFn: () => getOrderByIdHttp(id as string),
    enabled: !!id,
  });

  const handleCancelOrder = () => {
    mutate(id as string);
  };

  const renderOrerAction = () => {
    const renderButton = () => {
      switch (data?.data?.status) {
        case 'PROCESSING':
          return (
            <LoadingButton
              variant="contained"
              color="warning"
              size="small"
              disableElevation
              onClick={() => setOpen(true)}
              sx={{
                borderRadius: 99,
              }}
            >
              Hủy đạt hàng
            </LoadingButton>
          );
        case 'CONFIRMED':
          return <Button endIcon={<IconCheck />}>Đã nhận hàng</Button>;
        case 'CANCEL':
          return (
            <Button
              disabled
              variant="contained"
              size="small"
              color="error"
              sx={{
                borderRadius: 99,
              }}
            >
              Đã hủy đơn hàng
            </Button>
          );
        default:
          return null;
      }
    };

    return (
      <React.Fragment>
        {renderButton()}
        <Dialog open={open}>
          <DialogContent>
            <Typography>{t('cancelOrder')}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>{t('cancel')}</Button>
            <LoadingButton variant="contained" onClick={handleCancelOrder} disableElevation loading={isPending}>
              {t('cancelOrder')}
            </LoadingButton>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  };

  const renderInfo = () => {
    if (isLoading) {
      return <LinearProgress />;
    }
    if (!data?.data) {
      return null;
    }
    return (
      <React.Fragment>
        <Box
          height={100}
          sx={{
            backgroundImage: `url(/assets/mask.png)`,
            backgroundSize: 'cover',
          }}
        />
        <Card elevation={0}>
          <CardHeader
            title={t('orderSuccess')}
            titleTypographyProps={{ variant: 'h3' }}
            subheader={
              <Box>
                <Typography variant="body2">
                  {t('orderId')}: {data?.data?.id}
                </Typography>
                <Typography variant="body2">
                  {t('createdAt')}: {data?.data?.createDate}
                </Typography>
              </Box>
            }
            action={renderOrerAction()}
          />
          <CardContent>
            <Stack direction="row" alignItems="flex-end" gap={2}>
              <Typography color="gray">{t('orderTotal')}</Typography>
              <Chip label={formatVND(data?.data?.totalPrice)} icon={<IconCoin />} color="success" />
            </Stack>

            <List>
              {data?.data?.foodOrderResponses.map((item: any) => (
                <ListItemButton component={Link} to={`/food/${item?.id}`}>
                  <ListItemText>{item.quantity}</ListItemText>
                  <ListItemText
                    sx={{
                      minWidth: 600,
                    }}
                  >
                    {item?.foodDetailOrderResponse?.name}
                  </ListItemText>
                  <ListItemText>{formatVND(item?.foodDetailOrderResponse?.price)}</ListItemText>
                </ListItemButton>
              ))}
            </List>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} mt={2}>
          {renderInfo()}
        </Grid>
      </Grid>
    </Container>
  );
}

export default index;
