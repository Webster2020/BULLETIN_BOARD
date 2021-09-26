import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import styles from './SaveEditedPostButton.module.scss';

import Button from '@material-ui/core/Button';


const Component = ({className, children}) => {

  const clickHandler = () => {
    console.log('dupa');
    //setLoginStatusDispatch(true);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button variant="contained" onClick={() => clickHandler()}>SAVE</Button>
      {children}
    </div>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // setLoginStatusDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   setLoginStatusDispatch: bool => dispatch(createActionLogin(bool)),
// });

const Container = connect(mapStateToProps)(Component);
export {
  // Component as SaveEditedPostButton,
  Container as SaveEditedPostButton,
  Component as SaveEditedPostButtonComponent,
};
