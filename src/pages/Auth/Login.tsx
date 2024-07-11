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
  Typography,
  IconButton,
} from '@mui/material';
import { TypeOf, object, string } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { loginHttp, forgetPasswordHttp } from '@/apis/auth';
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
      username: 'user',
      password: '12345678',
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
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const login = useMutation({
    mutationKey: ['login'],
    mutationFn: loginHttp,
    onSuccess: (data) => {
      toast.success('Login Success');
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('usersId', JSON.stringify(data.data.usersId));
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.response.data.error);
    },
  });

  const formikLogin = useFormik({
    initialValues: { username: '3lesang', password: '12345678' },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      const data = {
        password: values.password,
        username: values.username,
      };
      login.mutate(data);
    },
  });
  // forgetPassword
  const forgetPassword = useMutation({
    mutationKey: ['forgetPassword'],
    mutationFn: forgetPasswordHttp,
    onSuccess: () => {
      toast.success('Reset Passwrod Success');
      setOpen(false);
    },
    onError: (error) => {
      toast.error(error.response.data.error, 'error');
    },
  });
  const formikForgetPassword = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string().required('Required').email('Invalid email address'),
    }),
    onSubmit: (value) => {
      forgetPassword.mutate(value.email);
    },
  });
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <img height="100%" width="100%" src="/assets/signin.jpg" alt="avatar" />
        </Grid>
        <Grid item xs={6}>
          <Box p={6}>
            <form onSubmit={formikLogin.handleSubmit}>
              <Typography component="h1" variant="h1" pb={4}>
                login
              </Typography>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Username"
                  required
                  id="username"
                  name="username"
                  value={formikLogin.values.username}
                  disabled={login.isPending}
                  onChange={formikLogin.handleChange}
                  error={formikLogin.errors.username}
                />
              </Box>
              <Box mb={3}>
                <TextField
                  fullWidth
                  label="Password"
                  required
                  disabled={login.isPending}
                  id="password"
                  name="password"
                  type="password"
                  value={formikLogin.values.password}
                  onChange={formikLogin.handleChange}
                  error={formikLogin.errors.password}
                />
              </Box>
              <Button onClick={handleOpen}>Forgot password</Button>
              {/* <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Nhớ tài khoản" />
              </FormGroup> */}
              <Link to="/auth/register">
                <Button>REGISTER</Button>
              </Link>
              <Stack alignItems="right">
                <Box ml="auto">
                  <Button variant="contained" sx={{ boxShadow: 0 }} type="submit">
                    LOGIN
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
              <Box sx={{ position: 'relative' }}>
                <IconButton
                  onClick={handleClose}
                  className="btn-close-sidebar"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ position: 'absolute', top: '-20px', right: '0' }}
                >
                  <CloseOutlinedIcon />
                </IconButton>
                <Typography id="modal-modal-title" variant="h6" component="h2" mb={2}>
                  Bạn quên mật khẩu?
                </Typography>
                <form onSubmit={formikForgetPassword.handleSubmit}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    id="email"
                    name="email"
                    type="text"
                    disabled={forgetPassword.isPending}
                    value={formikForgetPassword.values.email}
                    onChange={formikForgetPassword.handleChange}
                    error={formikForgetPassword.errors.email}
                  />
                  <Stack alignItems="center" mt={2}>
                    <Button variant="contained" sx={{ boxShadow: 0 }} type="submit">
                      Send email reset password
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
