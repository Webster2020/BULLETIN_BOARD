import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './PostDelBar.module.scss';

import { BackHomeButton } from '../../common/BackHomeButton/BackHomeButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Component = ({className}) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <BackHomeButton />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POST WAS DELETED ... 
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as PostDelBar,
  Component as PostDelBarComponent,
};
