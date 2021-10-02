import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionEditPost } from '../../../redux/postsRedux.js';

import styles from './SaveEditedPostButton.module.scss';

import Button from '@material-ui/core/Button';


const Component = (
  {
    className,
    children, 
    postData,
    title,
    content,
    image,
    price,
    phone,
    localization,
    update,
    setEditedPostDispatch,
  }
) => {

  const editedPost = {
    ...postData,
    title,
    content,
    image,
    price,
    phone,
    localization,
    update,
  };

  const clickHandler = () => {
    setEditedPostDispatch(editedPost);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  postData: PropTypes.object,
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  localization: PropTypes.string,
  update: PropTypes.string,
  setEditedPostDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  setEditedPostDispatch: postData => dispatch(createActionEditPost(postData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as SaveEditedPostButton,
  Container as SaveEditedPostButton,
  Component as SaveEditedPostButtonComponent,
};