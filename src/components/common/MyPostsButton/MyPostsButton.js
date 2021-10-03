import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getPostsState, createActionSwitchPosts } from '../../../redux/postsRedux.js';

import styles from './MyPostsButton.module.scss';

import Button from '@material-ui/core/Button';


const Component = ({className, postsState, switchPostsDispatch}) => {

  const clickHandler = () => {
    switchPostsDispatch(!postsState);
  };

  return (
    <div className={clsx(className, styles.root)}>
      {!postsState ? 
        (
          <Button variant="contained" onClick={() => clickHandler()}>MY POSTS</Button>
        )
        : 
        (
          <Button variant="contained" onClick={() => clickHandler()}>ALL POSTS</Button>
        )
      }
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
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
  // Component as MyPostsButton,
  Container as MyPostsButton,
  Component as MyPostsButtonComponent,
};
