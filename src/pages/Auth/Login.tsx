import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Modal,
  Typography, IconButton,
} from '@mui/material';
import { TypeOf, object, string } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link ,useNavigate} from 'react-router-dom';
import * as React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { loginHttp } from '@/apis/auth';

const registerSchema = object({
  username: string().min(1, 'Email không được để trống').email('Email không hợp lệ'),
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
      username: '3lesang@gmail.com',
      password: 'Sang2403@',
    },
  });
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const onSubmitHandler: SubmitHandler<LoginInput> = async (values) => {
    console.log(values);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: loginHttp,
    onSuccess: (data) => {
      toast.success('Login success');
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('usersId', JSON.stringify(data.data.usersId));
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.response.data.error)
    }
  });
  const formik = useFormik({
    initialValues:  { username: '3lesang', password: '12345678' },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required')
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
              <Typography component="h1" variant="h1" pb={4}>Đăng nhập</Typography>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Username"
                  required
                  id='username'
                  name='username'
                  value={formik.values.username}
                  disabled={isPending}
                  onChange={formik.handleChange}
                  error={formik.errors.username}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Password"
                  required
                  disabled={isPending}
                  id='password'
                  name='password'
                  type='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.errors.password}
                />
              </Box>
              <Button onClick={handleOpen}>Quên mật khẩu</Button>
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Nhớ tài khoản" />
              </FormGroup>
              <Link to="/auth/register">
                <Button>Tạo tài khoản</Button>
              </Link>
              <Stack alignItems="right">
                <Box ml="auto">
                  <Button variant="contained" sx={{ boxShadow: 0 }} type="submit">
                    Đăng nhập
                  </Button>
                </Box>
              </Stack>
            </form>
          </Box>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{position:'relative'}}>
                <IconButton onClick={handleClose} className="btn-close-sidebar" edge="start" color="inherit" aria-label="menu" sx={{ position:'absolute',top:'-20px',right:'0'}}>
                  <CloseOutlinedIcon />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
                  Bạn quên mật khẩu?
                </Typography>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    {...register('email')}
                    helperText={errors['email'] ? errors['email'].message : ''}
                  />
                  <Stack alignItems="center" mt={2}>
                    <Button variant="contained" sx={{ boxShadow: 0 }} type="submit">
                      Gửi email đăt lai mật khẩu
                    </Button>
                  </Stack>
                </form>
              </Box>

            </Box>
          </Modal>
        </Grid>
      </Grid>

    </Container>
  );
}
