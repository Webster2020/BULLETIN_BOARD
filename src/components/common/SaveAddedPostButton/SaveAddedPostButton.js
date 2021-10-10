import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionPostNewPost } from '../../../redux/postsRedux.js';

import styles from './SaveAddedPostButton.module.scss';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const Component = (
  {
    className,
    author,
    created,
    location,
    phone,
    photo,
    price,
    status,
    text,
    title,
    updated,
    validation,
    formIsValid,
    addNewPostToDB,
  }
) => {

  const addedPostDB = {
    author,
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
    if(validation(addedPostDB)) {
      console.log('Accept form validation!');
      addNewPostToDB(addedPostDB);
    } else {
      console.log('Reject form validation!');
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Link to={formIsValid ? `/postadded` : `/post/add`} style={{textDecoration: 'none'}}>
        <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
      </Link>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  status: PropTypes.string,
  photo: PropTypes.string,
  price: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  validation: PropTypes.func,
  formIsValid: PropTypes.bool,
  addNewPostToDB: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  // admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  addNewPostToDB: postData => dispatch(createActionPostNewPost(postData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as SaveAddedPostButton,
  Component as SaveAddedPostButtonComponent,
};
