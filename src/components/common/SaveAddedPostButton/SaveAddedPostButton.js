import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionPostNewPost } from '../../../redux/postsRedux.js';

import styles from './SaveAddedPostButton.module.scss';

import Button from '@material-ui/core/Button';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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
    addNewPostToDB,
  }
) => {

  const [isValid, setIsValid] = useState(false);

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
      setIsValid(true);
      addNewPostToDB(addedPostDB);
    } else {
      console.log('Reject form validation!');
    }
  };

  return (
    <div className={clsx(className, styles.root)}>
      <div className={styles.buttonWrapper}>
        <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
      </div>
      {isValid &&     
        (<Stack sx={{ width: '100%' }} spacing={2} mt={2}>
          <Alert severity="success">Post added confirm!</Alert>
        </Stack>)
      }
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
