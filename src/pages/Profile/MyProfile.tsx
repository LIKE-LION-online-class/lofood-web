import { Container, Typography, Stack, Box, Grid, Card, CardHeader, CardContent, IconButton, FormControl } from "@mui/material"
import { LoadingButton } from '@mui/lab'
import CustomTextField from '@/components/forms/CustomTextField'
import CustomPassword from '@/components/forms/CustomPassword'
import { IconEdit } from '@tabler/icons-react'
import { getUserByIdHttp, updatePasswordUserHttp, updateUserHttp } from '@/apis/user'
import { useMemo, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify';

const MyProfile = () => {

    const id = JSON.parse(localStorage.getItem('usersId'));
    const { data, isLoading } = useQuery({
        queryKey: ['getUserById', id],
        queryFn: getUserByIdHttp
    });

    const [changePassword, setChangePassword] = useState(false);
    console.log(changePassword, 'changePassword');
    const initialValues = useMemo(
        () => ({
            id: data?.data?.id || null,
            fullName: data?.data?.fullName || '',
            username: data?.data?.username || '',
            address: data?.data?.address || '',
            email: data?.data?.email || null,
            phoneNumber: data?.data?.phoneNumber || null,
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }),
        [data]
    )

    const { mutate: mutateUpdateUser, isPending: updatePending, isSuccess: isSuccessUpdateUser } = useMutation({
        mutationFn: updateUserHttp,
        onSuccess: () => {
            toast.success('Edit User Success');
        },
        onError: (error) => {
            console.log(error)
            toast.error(error.response.data.error.message, 'error')
        }
    })

    const { mutate: mutateUpdatePasswordUser, isPending: updatePasswordLoading } = useMutation({
        mutationFn: updatePasswordUserHttp,
        onSuccess: () => {
            toast.success('Edit Password Success');
            formik.resetForm(),
                setChangePassword(!changePassword)
        },
        onError: (error) => {
            toast.error(error.response.data.error.message, 'error');
        }
    })

    const formik = useFormik({
        enableReinitialize: true,// hien thi gia tri len form
        initialValues,// gia init 
        validationSchema: Yup.object({
            fullName: Yup.string().required('Required'),
            username: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            phoneNumber: Yup.string().required('Required'),
            ...(changePassword && {
                currentPassword: Yup.string().required('Required'),
                newPassword: Yup.string().required('Required'),
                confirmPassword: Yup.string()
                    .required('Required')
                    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
            })
        }),
        onSubmit: (values) => {

            const data = {
                id: values.id,
                fullName: values.fullName,
                username: values.username,
                address: values.address,
                phoneNumber: values.phoneNumber,
                email: values.email
            }

            mutateUpdateUser(data);

            if (values.confirmPassword) {
                const dataUpdatePassword = {
                    id: values.id,
                    currentPassword: values.currentPassword,
                    newPassword: values.newPassword,
                    confirmPassword: values.confirmPassword
                }
                console.log(dataUpdatePassword, 'values');
                mutateUpdatePasswordUser(dataUpdatePassword)
            }
        }
    })

    const renderFormControl = ({ id, label, type = 'text', disabled = false }) => (
        <FormControl fullWidth required>
            <Typography variant='subtitle1' fontWeight={600} component='label' htmlFor={id} mb='5px'>
                {label}
            </Typography>
            <CustomTextField
                id={id}
                type={type}
                size='small'
                fullWidth
                disabled={disabled}
                value={formik.values[id]}
                onChange={formik.handleChange}
                error={formik.touched[id] && Boolean(formik.errors[id])}
                helperText={formik.touched[id] && formik.errors[id]}
            />
        </FormControl>
    )
    const renderFormControlPassword = ({ id, label, disabled = false }) => (

        <FormControl fullWidth required>
            <Typography variant='subtitle1' fontWeight={600} component='label' htmlFor={id} mb='5px'>
                {label}
            </Typography>
            <CustomPassword
                id={id}
                name={id}
                value={formik.values[id]}
                toggleLabel={false}
                onChange={formik.handleChange}
                disabled={disabled}
            />

        </FormControl>
    )
    return (
        <Container maxWidth='md'>
            <Box mt={4}>
                <form onSubmit={formik.handleSubmit}>
                    <Stack direction='row' justifyContent='space-between' mb={2}>
                        <Stack>
                            <Typography variant='h4'>Account</Typography>
                        </Stack>
                        <Box>
                            <LoadingButton
                                variant='contained'
                                size='small'
                                type='submit'
                            >
                                Save
                            </LoadingButton>
                        </Box>
                    </Stack>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title='Profile' />
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={8}>
                                        {renderFormControl({ id: 'fullName', label: 'fullName' })}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {renderFormControl({ id: 'username', label: 'Username', disabled: true })}
                                    </Grid>
                                    <Grid item xs={12}>
                                        {renderFormControl({ id: 'address', label: 'Address' })}
                                    </Grid>
                                    <Grid item xs={4}>
                                        {renderFormControl({ id: 'phoneNumber', label: 'Phone Number' })}
                                    </Grid>
                                    <Grid item xs={8}>
                                        {renderFormControl({ id: 'email', label: 'Email', disabled: true })}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} mt={3} mb={6}>
                        <Card>
                            <CardHeader title='Change Password' />
                            <CardContent>
                                <IconButton onClick={() => setChangePassword(!changePassword)} size='small'>
                                    <IconEdit size={16} />
                                </IconButton>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        {renderFormControlPassword({
                                            id: 'currentPassword',
                                            label: 'Current Password',
                                            disabled: !changePassword
                                        })}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {renderFormControlPassword({
                                            id: 'newPassword',
                                            label: 'New Password',
                                            disabled: !changePassword
                                        })}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {renderFormControlPassword({
                                            id: 'confirmPassword',
                                            label: 'Confirm Password',
                                            disabled: !changePassword
                                        })}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </form>
            </Box>
        </Container >

    )
}

export default MyProfile;