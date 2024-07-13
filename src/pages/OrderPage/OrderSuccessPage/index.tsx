import { getOrderByIdHttp } from '@/api/order';
import SkeletonBox from '@/components/SkeletonBox';
import { formatVND } from '@/libs';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { IconCoin } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

// const getStatus = (status: string) => {
//   switch (status) {
//     case 'PROCESSING':
//       return 'Đang xử lý';
//     case 'SHIPPING':
//       return 'Đang giao hàng';
//     case 'DELIVERED':
//       return 'Đã giao hàng';
//     case 'CANCELED':
//       return 'Đã hủy';
//     default:
//       return 'Không xác định';
//   }
// };

function index() {
  const { id } = useParams();
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: ['getOrder', id],
    queryFn: () => getOrderByIdHttp(id as string),
    enabled: !!id,
  });

  console.log(data);

  const renderInfo = () => {
    if (isLoading) {
      return <SkeletonBox height={600} />;
    }
    if (!data?.data) {
      return null;
    }
    return (
      <>
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
            action={<Button>Hủy đạt hàng</Button>}
          />
          <CardContent>
            <Stack direction="row" alignItems="flex-end" gap={2}>
              <Typography color="gray">{t('orderTotal')}</Typography>
              <Chip label={formatVND(data?.data?.totalPrice)} icon={<IconCoin />} color="success" />
            </Stack>

            <List>
              {data?.data?.foodOrderResponses.map((item: any) => (
                <ListItemButton>
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
      </>
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
