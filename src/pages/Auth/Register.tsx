'use client';

import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Stack, TextField } from '@mui/material';

import { TypeOf, object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const registerSchema = object({
  name: string().min(1, 'Name is required').max(32, 'Name must be less than 100 characters'),
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  passwordConfirm: string().min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ['passwordConfirm'],
  message: 'Passwords do not match',
});

type RegisterInput = TypeOf<typeof registerSchema>;

export default function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    console.log(values);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#EDF2F7">
      <Container maxWidth="xs" disableGutters>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Card variant="outlined" sx={{ border: 'none', borderRadius: 8, p: 2 }}>
            <CardHeader
              title="Đăng ký tài khoản"
              subheader="Nhập thông tin tài khoản của bạn"
              titleTypographyProps={{ variant: 'h2' }}
            />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <TextField fullWidth label="Họ" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    label="Tên"
                    required
                    {...register('name')}
                    helperText={errors['name'] ? errors['name'].message : ''}
                  />
                </Grid>

                <Grid item xs={12}>
                  {/* <InputLabel>Email</InputLabel> */}
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    {...register('email')}
                    helperText={errors['email'] ? errors['email'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <InputLabel>Mật khẩu</InputLabel> */}
                  <TextField
                    type="password"
                    fullWidth
                    label="Mật khẩu"
                    required
                    {...register('password')}
                    helperText={errors['password'] ? errors['password'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <InputLabel>Xác nhận mật khẩu</InputLabel> */}
                  <TextField
                    type="password"
                    fullWidth
                    label="Xác nhận mật khẩu"
                    required
                    {...register('passwordConfirm')}
                    helperText={errors['passwordConfirm'] ? errors['passwordConfirm'].message : ''}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Link to="/auth/login">
                    <Button>Đăng nhập</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <Stack alignItems="right">
                    <Box ml="auto">
                      <Button variant="contained" sx={{ boxShadow: 0 }} type="submit">
                        Đăng ký
                      </Button>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </Container>
    </Box>
  );
}
