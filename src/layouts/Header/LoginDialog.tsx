import ForgotPasswordForm from '@/pages/AuthPage/components/ForgotPasswordForm';
import LoginForm from '@/pages/AuthPage/components/LoginForm';
import RegisterForm from '@/pages/AuthPage/components/RegisterForm';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState('login');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderTab = () => {
    switch (tab) {
      case 'login':
        return (
          <LoginForm
            onRegisterClick={(e) => {
              e.preventDefault();
              setTab('register');
            }}
            onForgotPasswordClick={(e) => {
              e.preventDefault();
              setTab('forgot-password');
            }}
          />
        );
      case 'register':
        return (
          <RegisterForm
            onLoginClick={(e) => {
              e.preventDefault();
              setTab('login');
            }}
          />
        );
      case 'forgot-password':
        return <ForgotPasswordForm />;
      default:
        return <LoginForm onRegisterClick={() => setTab('register')} />;
    }
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} color="inherit">
        Log in
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="xs"
        fullWidth
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Sign in</DialogTitle>

        <DialogContent>{renderTab()}</DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
