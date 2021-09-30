import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import styles from './NotFoundBar.module.scss';

import { BackHomeButton } from '../../common/BackHomeButton/BackHomeButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Component = ({className, children}) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <BackHomeButton />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NOT FOUND
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   login: getLoginStatus(state),
//   user: getUserData(state),
//   //admin: getAdminStatus(state),
// });

// const mapDispatchToProps = dispatch => ({
//   setLoginStatusDispatch: arg => dispatch(creatActionSetLoginStatus(arg)),
// });

// const Container = connect(mapStateToProps)(Component);

export {
  Component as NotFoundBar,
  // Container as NotFoundBar,
  Component as NotFoundBarComponent,
};
