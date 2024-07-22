import { userInfoAtom } from '@/atom';
import { Stack } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import Cart from './Cart';
import LoginDialog from './LoginDialog';
import User from './User';

function AuthButton() {
  const [userInfo] = useAtom(userInfoAtom);

  if (!userInfo?.id) return <LoginDialog />;

  return (
    <React.Fragment>
      <Stack direction="row" spacing={1} alignItems="center">
        <Cart />
        <User />
      </Stack>
    </React.Fragment>
  );
}

export default AuthButton;
