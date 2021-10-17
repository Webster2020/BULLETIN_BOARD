import React from 'react';
import { Link } from 'react-router-dom';

import styles from './AddPostButton.module.scss';

import AddBoxIcon from '@mui/icons-material/AddBox';
import Stack from '@mui/material/Stack';

const Component = () => {

  return (
    <div className={styles.root}>
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        <Link to={`/post/add`} style={{textDecoration: 'none'}} className={styles.addButton}>
          <AddBoxIcon color='primary' fontSize='large'/>
        </Link>
      </Stack>
    </div>
  );
};

export {
  Component as AddPostButton,
  Component as AddPostButtonComponent,
};
