import React from 'react';

// material-ui
import { Chip, Typography } from '@material-ui/core';

// third-party
import axios from 'axios';

// assets
import { IconLogout, IconSearch, IconSettings } from '@tabler/icons';
import { useRouter } from 'next/router';

//-----------------------|| PROFILE MENU ||-----------------------//

const ProfileSection = () => {
  const router = useRouter();
  const account = {};

  const handleLogout = () => {
    console.log(account.token);
    router.push('/login');
  };
  return (
    <React.Fragment>
      <Chip
        icon={<IconLogout stroke={1.5} size="1.3rem" />}
        label={<Typography variant="body2">Logout</Typography>}
        variant="outlined"
        onClick={handleLogout}
        color="primary"
      />
    </React.Fragment>
  );
};

export default ProfileSection;
