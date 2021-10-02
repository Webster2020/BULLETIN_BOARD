import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NoPosts.module.scss';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
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
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NoPosts,
  // Container as NoPosts,
  Component as NoPostsComponent,
};
