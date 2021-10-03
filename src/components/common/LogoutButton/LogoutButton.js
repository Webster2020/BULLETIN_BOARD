import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData, createActionLogout } from '../../../redux/loginRedux.js';

import styles from './LogoutButton.module.scss';

import Button from '@material-ui/core/Button';


const Component = ({className, setLogoutStatusDispatch}) => {

  const clickHandler = () => {
    setLogoutStatusDispatch(false);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button variant="contained" onClick={() => clickHandler()}>LOGOUT</Button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  setLogoutStatusDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  setLogoutStatusDispatch: bool => dispatch(createActionLogout(bool)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as LogoutButton,
  Container as LogoutButton,
  Component as LogoutButtonComponent,
};
