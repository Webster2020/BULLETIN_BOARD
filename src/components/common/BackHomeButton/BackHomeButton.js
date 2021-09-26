import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './BackHomeButton.module.scss';

import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';


const Component = ({className, children}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Box   
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr={3}
      >
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <Button variant="contained">HOME</Button>
        </Link>
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
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as BackHomeButton,
  // Container as BackHomeButton,
  Component as BackHomeButtonComponent,
};
