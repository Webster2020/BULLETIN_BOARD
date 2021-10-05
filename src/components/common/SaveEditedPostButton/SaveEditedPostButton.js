import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionPutEditPost } from '../../../redux/postsRedux.js';

import styles from './SaveEditedPostButton.module.scss';

import Button from '@material-ui/core/Button';


const Component = (
  {
    id,
    className, 
    post,
    location,
    phone,
    photo,
    price,
    text,
    title,
    updated,
    setEditedPostDispatch,
  }
) => {

  useEffect(() => {
    console.log(post);
  });

  const editedPost = {
    ...post,
    location,
    phone,
    photo,
    price,
    text,
    title,
    updated,
  };

  const clickHandler = () => {
    console.log('SAVE EDITED POST');
    console.log('post/:id to server... TO DO !!!');
    console.log(editedPost);
    setEditedPostDispatch(id, editedPost);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  post: PropTypes.object,
  location: PropTypes.string,
  phone: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  updated: PropTypes.string,
  setEditedPostDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  setEditedPostDispatch: (id, post) => dispatch(createActionPutEditPost(id, post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as SaveEditedPostButton,
  Container as SaveEditedPostButton,
  Component as SaveEditedPostButtonComponent,
};
