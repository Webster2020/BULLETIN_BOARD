import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './EditPostButton.module.scss';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';


const Component = ({className, children, id}) => {

  const clickHandler = () => {
    console.log('edit post page');
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        mx={2}
      >
        <Link to={`/post/${id}/edit`} style={{textDecoration: 'none'}}>
          <Button variant="contained" onClick={() => clickHandler()}>EDIT POST</Button>
        </Link>
      </Stack>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as EditPostButton,
  // Container as EditPostButton,
  Component as EditPostButtonComponent,
};
