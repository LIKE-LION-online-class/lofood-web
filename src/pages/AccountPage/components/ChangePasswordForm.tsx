import { updatePasswordUserHttp } from '@/api/user';
import { userInfoAtom } from '@/atom';
import { notify } from '@/components/CustomToast';
import { LoadingButton } from '@mui/lab';
import { Card, CardContent, CardHeader, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

function ChangePasswordForm() {
  const [userInfo] = useAtom(userInfoAtom);
  const { id } = userInfo;

  const initialValues = useMemo(
    () => ({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }),
    [],
  );

  const { mutate, isPending } = useMutation({
    mutationKey: ['updatePasswordUser', id],
    mutationFn: updatePasswordUserHttp,
    onSuccess: () => {
      notify('Update password success', 'success');
      formik.resetForm();
    },
    onError: () => {},
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Yup.object({
      currentPassword: Yup.string().required('Required'),
      newPassword: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('newPassword'), ''], 'Passwords must match'),
    }),
    onSubmit: (values) => {
      mutate({
        id: id as string,
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });
    },
  });
  const { t } = useTranslation();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card elevation={0}>
            <CardHeader
              title="Password"
              titleTypographyProps={{
                variant: 'h3',
              }}
              action={
                <LoadingButton
                  variant="contained"
                  size="small"
                  type="submit"
                  disableElevation
                  loading={isPending}
                  disabled={isPending || !formik.dirty || !formik.isValid}
                >
                  Save
                </LoadingButton>
              }
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('password')}
                    </Typography>
                    <TextField
                      type="password"
                      name="currentPassword"
                      size="small"
                      fullWidth
                      value={formik.values.currentPassword}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('newPassword')}
                    </Typography>
                    <TextField
                      type="password"
                      name="newPassword"
                      size="small"
                      fullWidth
                      value={formik.values.newPassword}
                      onChange={formik.handleChange}
                      error={Boolean(formik.errors.newPassword)}
                      helperText={formik.errors.newPassword}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('confirmPassword')}
                    </Typography>
                    <TextField
                      type="password"
                      name="confirmPassword"
                      size="small"
                      fullWidth
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      error={Boolean(formik.errors.confirmPassword)}
                      helperText={formik.errors.confirmPassword}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </form>
  );
}

export default ChangePasswordForm;
