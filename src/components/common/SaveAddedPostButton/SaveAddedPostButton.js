import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionAddPost } from '../../../redux/postsRedux.js';

import styles from './SaveAddedPostButton.module.scss';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';


const Component = (
  {
    className,
    children, 
    postId,
    authorId,
    author,
    title,
    content,
    date,
    update,
    email,
    status,
    image,
    price,
    phone,
    localization,
    setAddedPostDispatch,
  }
) => {

  const addedPost = {
    postId,
    authorId,
    author,
    title,
    content,
    date,
    update,
    email,
    status,
    image,
    price,
    phone,
    localization,
  };

  const clickHandler = () => {
    setAddedPostDispatch(addedPost);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Link to={`/`} style={{textDecoration: 'none'}}>
        <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
      </Link>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  postId: PropTypes.string,
  authorId: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  update: PropTypes.string,
  email: PropTypes.string,
  status: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  localization: PropTypes.string,
  setAddedPostDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  // admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  setAddedPostDispatch: postData => dispatch(createActionAddPost(postData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as SaveAddedPostButton,
  Container as SaveAddedPostButton,
  Component as SaveAddedPostButtonComponent,
};
