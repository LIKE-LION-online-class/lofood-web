import { userInfoAtom } from '@/atom';
import { Avatar, Button, Tooltip } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';

function User() {
  const [userInfo] = useAtom(userInfoAtom);

  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <Link to="/account/profile">
          <Button
            variant="text"
            sx={{
              borderRadius: 99,
            }}
            color="inherit"
            size="small"
            startIcon={
              <Avatar
                src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-with-glasses-6209594-5073366.png"
                sx={{
                  width: 28,
                  height: 28,
                }}
              />
            }
          >
            {userInfo?.userName}
          </Button>
        </Link>
      </Tooltip>
    </React.Fragment>
  );
}

export default User;
