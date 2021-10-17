import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionPutEditPost } from '../../../redux/postsRedux.js';

import styles from './SaveEditedPostButton.module.scss';

import Button from '@material-ui/core/Button';


const Component = (
  {
    id,
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
    setEditedPostDispatch(id, editedPost);
  };

  return (
    <div className={styles.root}>
      <Link to={`/postedited`} style={{textDecoration: 'none'}}>
        <Button variant="outlined" size="large" onClick={() => clickHandler()}>SAVE</Button>
      </Link>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
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
});

const mapDispatchToProps = dispatch => ({
  setEditedPostDispatch: (id, post) => dispatch(createActionPutEditPost(id, post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as SaveEditedPostButton,
  Component as SaveEditedPostButtonComponent,
};
