import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData, createActionLogin, createActionLoginWithGoogle } from '../../../redux/loginRedux.js';

import styles from './LoginButton.module.scss';

import Button from '@material-ui/core/Button';

const Component = ({className, setLoginStatusDispatch, loginWithGoogleDispatch}) => {

  const clickHandler = () => {
    setLoginStatusDispatch(true);
    loginWithGoogleDispatch();
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button variant="contained" onClick={() => clickHandler()}>LOGIN</Button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  setLoginStatusDispatch: PropTypes.func,
  loginWithGoogleDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  setLoginStatusDispatch: bool => dispatch(createActionLogin(bool)),
  loginWithGoogleDispatch: () => dispatch(createActionLoginWithGoogle()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LoginButton,
  Component as LoginButtonComponent,
};
