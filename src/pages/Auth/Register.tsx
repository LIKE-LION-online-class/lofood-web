'use client';

import { Box, Button, Container, Grid, Stack, TextField, Typography, FormControl, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { registerHttp } from '@/apis/auth';
import { useState, useMemo } from 'react';
import { User } from '../../types/users.type';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { isAxiosError } from '@/utils/utils.ts';
import CustomPassword from '@/components/forms/CustomPassword';
import { useNavigate } from 'react-router-dom';

type FormStateType = Omit<User, 'id'>;

const inititalFormState: FormStateType = {
  fullName: '',
  address: '',
  phoneNumber: '',
  username: '',
  email: '',
  password: '',
};

type FormError =
  | {
      [key in keyof FormStateType]: string;
    }
  | null;
export default function Register() {
  const registerMutation = useMutation({
    mutationFn: (body: FormStateType) => {
      return registerHttp(body);
    },
  });

  const [role, setRole] = useState('');
  const handleChangeSelect = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const [formState, setFormState] = useState<FormStateType>(inititalFormState);
  const handleChange = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const navigate = useNavigate();

  const add = { role: role };
  Object.entries(add).forEach(([key, value]) => {
    formState[key] = value;
  });

  console.log('error', registerMutation.error);
  console.log('formState', formState);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    registerMutation.mutate(formState, {
      onSuccess: () => {
        setFormState(inititalFormState); // reset form
        toast.success('Register  success');
        navigate('/auth/login');
      },
      onError: (error) => {
        toast.error('Register fail');
      },
    });
  };

  const errorForm: FormError = useMemo(() => {
    const error = registerMutation.error;
    console.log('aaaaa-error');
    if (isAxiosError<{ error: FormError }>(error) && error.response?.status === 406) {
      return error.response?.data.error;
    }
    return null;
  }, [registerMutation.error]);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img height="100%" width="100%" src="/assets/signin.jpg" alt="avatar" />
        </Grid>
        <Grid item xs={6}>
          <Box p={6}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h1" component="h1" pb={4}>
                Đăng ký tài khoản
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Họ và tên của bạn"
                    required
                    id="fullname"
                    name="fullname"
                    value={formState.fullName}
                    onChange={handleChange('fullName')}
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
                    value={formState.address}
                    onChange={handleChange('address')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Số điện thoại"
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="UserName của bạn"
                    required
                    id="username"
                    name="username"
                    value={formState.username}
                    onChange={handleChange('username')}
                  />
                  {errorForm && (
                    <Typography className="error" pt={1} component={'p'} variant="p">
                      <span className="font-medium">Lỗi! </span>
                      {errorForm.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Địa chỉ email của bạn"
                    required
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange('email')}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField
                    type="Password"
                    fullWidth
                    label="Mật khẩu"
                    required
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange('password')}
                  /> */}
                  <CustomPassword
                    id="password"
                    name="password"
                    value={formState.password}
                    toggleLabel={true}
                    onChange={handleChange('password')}
                    disabled={false}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={handleChangeSelect}
                    >
                      <MenuItem value="ROLE_USER">User</MenuItem>
                      <MenuItem value="ROLE_BUSINESS">Business</MenuItem>
                    </Select>
                  </FormControl>
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
