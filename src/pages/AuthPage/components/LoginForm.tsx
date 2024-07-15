import { loginHttp } from '@/api/auth';
import { tokenAtom, userInfoAtom } from '@/atom';
import { notify } from '@/components/CustomToast';
import { LoadingButton } from '@mui/lab';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useAtom } from 'jotai';

export default function LoginForm() {
  const navigate = useNavigate();
  const [, setUserInfo] = useAtom(userInfoAtom);
  const [, setToken] = useAtom(tokenAtom);

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: loginHttp,
    onSuccess: (data) => {
      if (data?.data) {
        setUserInfo({
          id: data?.data?.usersId,
          username: data?.data?.userName,
          refreshToken: data?.data?.refreshToken,
          role: data?.data?.roles[0],
        });
        setToken(data?.data?.token);
        navigate('/');
      }
    },
    onError: (error: any) => {
      notify(error?.response.data.error, 'error');
    },
  });

  const formik = useFormik({
    initialValues: { username: 'user', password: '12345678' },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={3}>
        <Typography variant="subtitle2" component="label" mb="5px">
          Username
        </Typography>
        <TextField
          fullWidth
          required
          size="small"
          name="username"
          value={formik.values.username}
          disabled={isPending}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
      </Box>
      <Box mb={1}>
        <Typography variant="subtitle2" component="label" mb="5px">
          Password
        </Typography>
        <TextField
          fullWidth
          required
          size="small"
          disabled={isPending}
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>

      <Typography textAlign="right" mb={3} variant="subtitle2" color="primary">
        <Link to="/auth/forgot-password">Forgot password?</Link>
      </Typography>
      <Stack direction="row" alignItems="end" justifyContent="space-between">
        <Typography variant="subtitle2">
          Don't have an account?
          <Link to="/auth/register">Register</Link>
        </Typography>
        <LoadingButton
          variant="contained"
          sx={{ boxShadow: 0, textTransform: 'none' }}
          type="submit"
          loading={isPending}
          disabled={isPending}
        >
          Log in
        </LoadingButton>
      </Stack>
    </form>
  );
}
