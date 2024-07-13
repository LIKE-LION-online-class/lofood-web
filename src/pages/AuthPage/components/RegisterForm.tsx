import { registerHttp } from '@/api/auth';
import { LoadingButton } from '@mui/lab';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function RegisterForm() {
  const { mutate, isPending } = useMutation({
    mutationFn: registerHttp,
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      mutate(values);
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
            name="fullname"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Username
          </Typography>
          <TextField size="small" fullWidth name="username" />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Phone Number
          </Typography>
          <TextField size="small" fullWidth name="phoneNumber" />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Email
          </Typography>

          <TextField size="small" fullWidth name="email" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Password
          </Typography>
          <TextField size="small" fullWidth name="password" />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle2" component="label" mb="5px">
            Confirm Password
          </Typography>
          <TextField size="small" fullWidth name="confirmPassword" />
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
              disabled={isPending}
            >
              Register
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
}
