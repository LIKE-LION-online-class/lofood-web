import { registerHttp } from '@/api/auth';
import { notify } from '@/components/CustomToast';
import { LoadingButton } from '@mui/lab';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function RegisterForm() {
  const { mutate, isPending } = useMutation({
    mutationFn: registerHttp,
    onSuccess: () => {
      notify('Register success', 'success');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
      role: 'ROLE_USER',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      const { confirmPassword, ...data } = values;
      mutate(data);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Full Name
          </Typography>
          <TextField
            size="small"
            fullWidth
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Username
          </Typography>
          <TextField
            size="small"
            fullWidth
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Phone Number
          </Typography>
          <TextField
            size="small"
            fullWidth
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Email
          </Typography>

          <TextField
            size="small"
            fullWidth
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Password
          </Typography>
          <TextField
            size="small"
            fullWidth
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Confirm Password
          </Typography>
          <TextField
            size="small"
            fullWidth
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" alignItems="end" justifyContent="space-between">
            <Typography variant="subtitle2">
              Already have an account? <Link to="/auth/login">Log in</Link>
            </Typography>
            <LoadingButton
              variant="contained"
              sx={{ boxShadow: 0, textTransform: 'none' }}
              type="submit"
              loading={isPending}
              disabled={isPending || !formik.isValid || !formik.dirty}
            >
              Register
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
