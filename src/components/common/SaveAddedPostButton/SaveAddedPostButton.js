import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionPostNewPost } from '../../../redux/postsRedux.js';

import styles from './SaveAddedPostButton.module.scss';

// import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';


const Component = (
  {
    className,
    author,
    // authorName,
    created,
    location,
    phone,
    photo,
    // postId,
    price,
    status,
    text,
    title,
    updated,
    // setAddedPostDispatch,
    addNewPostToDB,
  }
) => {

  // const addedPost = {
  //   postId,
  //   authorName,
  //   author,
  //   title,
  //   text,
  //   created,
  //   updated,
  //   email,
  //   status,
  //   photo,
  //   price,
  //   phone,
  //   location,
  // };

  const addedPostDB = {
    author,
    // authorName,
    created,
    location,
    phone,
    photo,
    price,
    status,
    text,
    title,
    updated,
  };

  const clickHandler = () => {
    //setAddedPostDispatch(addedPost);
    addNewPostToDB(addedPostDB);
  };

  return (
    <div className={clsx(className, styles.root)}>
      {/* <Link to={`/`} style={{textDecoration: 'none'}}> */}
      <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
      {/* </Link> */}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  postId: PropTypes.string,
  authorName: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  setAddedPostDispatch: PropTypes.func,
  addNewPostToDB: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  // admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  // setAddedPostDispatch: postData => dispatch(createActionAddPost(postData)),
  addNewPostToDB: postData => dispatch(createActionPostNewPost(postData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as SaveAddedPostButton,
  Container as SaveAddedPostButton,
  Component as SaveAddedPostButtonComponent,
};
