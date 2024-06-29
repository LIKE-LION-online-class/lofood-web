'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Modal,
  Typography
} from '@mui/material';
import { TypeOf, object, string } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import * as React from 'react';

const registerSchema = object({
  email: string().min(1, 'Email không được để trống').email('Email không hợp lệ'),
  password: string().min(1, 'Password không được để trống'),
});

export type LoginInput = TypeOf<typeof registerSchema>;

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '3lesang@gmail.com',
      password: 'Sang2403@',
    },
  });
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const onSubmitHandler: SubmitHandler<LoginInput> = async (values) => {
    console.log(values);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#EDF2F7">
      <Container maxWidth="xs" disableGutters>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Card variant="outlined" sx={{ border: 'none', borderRadius: 8, p: 2 }}>
            <CardHeader
              title=" Đăng nhập"
              subheader="Nhập thông tin đăng nhập của bạn"
              titleTypographyProps={{ variant: 'h2' }}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    {...register('email')}
                    helperText={errors['email'] ? errors['email'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    fullWidth
                    label="Password"
                    required
                    {...register('password')}
                    helperText={errors['password'] ? errors['password'].message : ''}
                  />
                  <Button onClick={handleOpen}>Quên mật khẩu</Button>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Nhớ tài khoản" />
                  </FormGroup>
                </Grid>
                <Grid item xs={6}>
                  <Link to="/auth/register">
                    <Button>Tạo tài khoản</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Stack alignItems="right">
                    <Box ml="auto">
                      <Button variant="contained" sx={{ boxShadow: 0 }} type="submit">
                        Đăng nhập
                      </Button>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </Card>
        </form>
      </Container>
    </Box>
  );
}
