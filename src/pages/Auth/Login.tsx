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
} from '@mui/material';
import { TypeOf, object, string } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';

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

  const onSubmitHandler: SubmitHandler<LoginInput> = async (values) => {
    console.log(values);
  };

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

                  <Button>Quên mật khẩu</Button>
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
          </Card>
        </form>
      </Container>
    </Box>
  );
}
