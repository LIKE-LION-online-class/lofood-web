import { getUserByIdHttp, updateUserHttp } from '@/api/user';
import { userInfoAtom } from '@/atom';
import { notify } from '@/components/CustomToast';
import { LoadingButton } from '@mui/lab';
import { Card, CardContent, CardHeader, FormControl, Grid, TextField, Typography } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

function ProfileForm() {
  const [userInfo] = useAtom(userInfoAtom);
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { usersId } = userInfo;
  const { data } = useQuery({
    queryKey: ['getUserById', usersId],
    queryFn: () => getUserByIdHttp(usersId),
  });

  const initialValues = useMemo(
    () => ({
      id: data?.data?.id || '',
      fullName: data?.data?.fullName || '',
      username: data?.data?.username || '',
      address: data?.data?.address || '',
      email: data?.data?.email || null,
      phoneNumber: data?.data?.phoneNumber || null,
    }),
    [data],
  );
  console.log(data);
  const { mutate: mutateUpdateUser, isPending } = useMutation({
    mutationFn: updateUserHttp,
    onSuccess: () => {
      notify('Update profile success', 'success');
      queryClient.invalidateQueries({
        queryKey: ['getUserById', usersId],
      });
    },
    onError: () => {},
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      email: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      const data = {
        id: values.id,
        fullName: values.fullName,
        address: values.address,
        email: values.email,
        phoneNumber: values.phoneNumber,
      };
      mutateUpdateUser(data);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card elevation={0}>
            <CardHeader
              title="Profile"
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
                  disabled={isPending || !formik.dirty}
                >
                  Save
                </LoadingButton>
              }
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('fullName')}
                    </Typography>
                    <TextField
                      type="text"
                      name="fullName"
                      size="small"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('username')}
                    </Typography>
                    <TextField
                      type="text"
                      name="username"
                      size="small"
                      fullWidth
                      disabled
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('address')}
                    </Typography>
                    <TextField
                      type="text"
                      multiline
                      rows={5}
                      name="address"
                      size="small"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.address}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('email')}
                    </Typography>
                    <TextField
                      type="email"
                      name="email"
                      size="small"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth required>
                    <Typography variant="subtitle2" component="label" mb="5px">
                      {t('phoneNumber')}
                    </Typography>
                    <TextField
                      type="text"
                      name="phoneNumber"
                      size="small"
                      fullWidth
                      onChange={formik.handleChange}
                      value={formik.values.phoneNumber}
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

export default ProfileForm;
