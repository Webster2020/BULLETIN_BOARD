import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPostsState, createActionSwitchPosts } from '../../../redux/postsRedux.js';

import styles from './MyPostsButton.module.scss';

import Button from '@material-ui/core/Button';

const Component = ({postsState, switchPostsDispatch}) => {

  const clickHandler = () => {
    switchPostsDispatch(!postsState);
  };

  return (
    <div className={styles.root}>
      <Button variant="contained" onClick={() => clickHandler()}>{!postsState ? 'MY POSTS' : 'ALL POSTS'}</Button>
    </div>
  );
};

Component.propTypes = {
  postsState: PropTypes.bool,
  switchPostsDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  postsState: getPostsState(state),
});

const mapDispatchToProps = dispatch => ({
  switchPostsDispatch: bool => dispatch(createActionSwitchPosts(bool)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as MyPostsButton,
  Component as MyPostButtonComponent,
};
