import React, { useEffect } from 'react';
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
    post,
    title,
    text,
    photo,
    price,
    phone,
    location,
    updated,
    setEditedPostDispatch,
  }
) => {

  useEffect(() => {
    console.log(post);
  });

  const editedPost = {
    ...post,
    title,
    text,
    photo,
    price,
    phone,
    location,
    updated,
  };

  const clickHandler = () => {
    console.log('SAVE EDITED POST');
    console.log('post/:id to server... TO DO !!!');
    console.log(editedPost);
    setEditedPostDispatch(editedPost);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object,
  title: PropTypes.string,
  text: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  updated: PropTypes.string,
  setEditedPostDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  setEditedPostDispatch: post => dispatch(createActionEditPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as SaveEditedPostButton,
  Container as SaveEditedPostButton,
  Component as SaveEditedPostButtonComponent,
};
