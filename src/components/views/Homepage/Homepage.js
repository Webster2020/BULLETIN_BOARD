import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import styles from './Homepage.module.scss';

import { Header } from '../../layout/Header/Header';
import { AddPostButton } from '../../common/AddPostButton/AddPostButton';
import { PostsList } from '../../features/PostsList/PostsList';

const Component = ({className, children, login, user}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    {login && <AddPostButton />}
    <PostsList userId={user.id}/>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  login: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  // admin: getAdminStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
