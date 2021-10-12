import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { 
  getLoginStatus, 
  getUserData, 
  createActionLogin, 
  createActionLoginWithGoogle,
  // createActionLoginDB, 
  createActionRegisterDB, 
} from '../../../redux/loginRedux.js';

import styles from './LoginButton.module.scss';

import Button from '@material-ui/core/Button';

const Component = (
  {
    className, 
    setLoginStatusDispatch, 
    loginWithGoogleDispatch,
    // loginDispatch,
    registerDispatch,
  }
) => {

  const clickHandler = () => {
    setLoginStatusDispatch(true);
    loginWithGoogleDispatch();
    // loginDispatch();
    registerDispatch();
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
  // loginDispatch: PropTypes.func,
  registerDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  setLoginStatusDispatch: bool => dispatch(createActionLogin(bool)),
  loginWithGoogleDispatch: () => dispatch(createActionLoginWithGoogle()),
  // loginDispatch: () => dispatch(createActionLoginDB({email: 'adam@adam', password: 'adam1'})),
  registerDispatch: () => dispatch(createActionRegisterDB({name: 'michal', email: 'michal@michal.com', password: 'michal1'})),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LoginButton,
  Component as LoginButtonComponent,
};
