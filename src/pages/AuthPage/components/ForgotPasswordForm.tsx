import { forgetPasswordHttp } from '@/api/auth';
import { notify } from '@/components/CustomToast';
import { LoadingButton } from '@mui/lab';
import { Box, Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ['forgetPassword'],
    mutationFn: forgetPasswordHttp,
    onSuccess: () => {
      notify('Email sent successfully', 'success');
      navigate('/auth/login');
    },
    onError: (error: any) => {
      notify(error?.response.data.error, 'error');
    },
  });

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Invalid email'),
    }),
    onSubmit: (values) => {
      mutate(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={3}>
        <Typography variant="subtitle2" component="label" mb="5px">
          Email
        </Typography>
        <TextField
          fullWidth
          required
          size="small"
          name="email"
          value={formik.values.email}
          disabled={isPending}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Box>
      <Stack direction="row" alignItems="end" justifyContent="flex-end">
        <LoadingButton
          variant="contained"
          sx={{ boxShadow: 0, textTransform: 'none' }}
          type="submit"
          loading={isPending}
          disabled={isPending}
        >
          Send
        </LoadingButton>
      </Stack>
    </form>
  );
}
