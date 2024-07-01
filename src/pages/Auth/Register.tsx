'use client';

import {
  Box,
  Button,
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
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { registerHttp } from '@/apis/auth';

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
  const { mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: registerHttp,
    onSuccess: () => {
      toast.success('Register Success');
    },
    onError: (error) => {
      toast.error(error.response.data.error)
    }
  });
  const formik = useFormik({
    initialValues:{fullname:'',address:'',phoneNumber:'',username:'',email:'',password:'',role:''},
    validationSchema:Yup.object({
      fullname:Yup.string().required('Required'),
      address:Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      role: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      mutate(values);
    }
  })

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img height="100%" width="100%" src="../src/assets/signin.jpg" alt="avatar" />
        </Grid>
        <Grid item xs={6}>
          <Box p={6}>
            <form onSubmit={formik.handleSubmit}>
              <Typography variant="h1" component="h1" pb={4}>Đăng ký tài khoản</Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Họ và của bạn"
                    required
                    id="fullname"
                    name="fullname"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    error={formik.errors.fullname}
                    helperText={formik.touched.fullname && formik.errors.fullname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="address"
                    fullWidth
                    label="Địa chỉ thường trú"
                    required
                    id="address"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.errors.address}
                    helperText={formik.touched.address && formik.errors.address}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.errors.phoneNumber}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="UserName của bạn"
                    required
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                    helperText={formik.touched.username && formik.errors.username}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Địa chỉ email của bạn"
                    required
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="Password"
                    fullWidth
                    label="Mật khẩu"
                    required
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="role"
                    fullWidth
                    label="Vai trò"
                    required
                    id="role"
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    error={formik.errors.role}
                    helperText={formik.touched.role && formik.errors.role}
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
