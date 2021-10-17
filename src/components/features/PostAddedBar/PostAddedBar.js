import React from 'react';

import styles from './PostAddedBar.module.scss';

import { BackHomeButton } from '../../common/BackHomeButton/BackHomeButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Component = () => {

  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <BackHomeButton />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POST WAS ADDED ... 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export {
  Component as PostAddedBar,
  Component as PostAddedBarComponent,
};
