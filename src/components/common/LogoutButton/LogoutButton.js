import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData, createActionLogout } from '../../../redux/loginRedux.js';
import { createActionSwitchPosts } from '../../../redux/postsRedux.js';

import styles from './LogoutButton.module.scss';

import Button from '@material-ui/core/Button';

const Component = ({className, setLogoutStatusDispatch, switchPostsDispatch}) => {

  const clickHandler = () => {
    setLogoutStatusDispatch(false);
    switchPostsDispatch(false);
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
  switchPostsDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  setLogoutStatusDispatch: bool => dispatch(createActionLogout(bool)),
  switchPostsDispatch: bool => dispatch(createActionSwitchPosts(bool)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LogoutButton,
  Component as LogoutButtonComponent,
};
