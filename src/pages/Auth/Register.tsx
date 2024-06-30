'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { TypeOf, object, string } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as React from 'react';

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
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img height="100%" width="100%" src="../src/assets/signin.jpg" alt="avatar" />
        </Grid>
        <Grid item xs={6}>
          <Box p={6}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <Typography variant="h1" component="h1" pb={4}>Đăng ký tài khoản</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Họ của bạn"
                    required
                    {...register('fullname')}
                    helperText={errors['fullname'] ? errors['fullname'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Tên của bạn"
                    required
                    {...register('username')}
                    helperText={errors['username'] ? errors['username'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Địa chỉ email của bạn"
                    required
                    {...register('email')}
                    helperText={errors['email'] ? errors['email'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    required
                    {...register('phoneNumber')}
                    helperText={errors['phoneNumber'] ? errors['phoneNumber'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="role"
                    fullWidth
                    label="Vai trò"
                    required
                    {...register('role')}
                    helperText={errors['role'] ? errors['role'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="address"
                    fullWidth
                    label="Địa chỉ thường trú"
                    required
                    {...register('address')}
                    helperText={errors['address'] ? errors['address'].message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    fullWidth
                    label="Mật khẩu"
                    required
                    {...register('password')}
                    helperText={errors['password'] ? errors['password'].message : ''}
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
            </form>
          </Box>

        </Grid>
      </Grid>
    </Container>

  );
}
