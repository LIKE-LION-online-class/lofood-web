import { userInfoAtom } from '@/atom';
import { Button, Stack } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import User from './User';

function AuthButton() {
  const [userInfo] = useAtom(userInfoAtom);

  if (userInfo?.userName === '')
    return (
      <React.Fragment>
        <Button component={Link} to="/auth/login" color="inherit">
          Log in
        </Button>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} alignItems="end">
        <Cart />
        <User />
      </Stack>
    </React.Fragment>
  );
}

export default AuthButton;
