import React from 'react';

import styles from './NoPosts.module.scss';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Component = () => (
  <div className={styles.root}>
    <Stack 
      my={5}
      sx={{ width: '100%' }}
      justifyContent="flex-start"
      alignItems="center"
      spacing={2} 
    >
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        There is no post to display — <strong>Login and add new one!</strong>
      </Alert>
    </Stack>
  </div>
);

export {
  Component as NoPosts,
  Component as NoPostsComponent,
};
