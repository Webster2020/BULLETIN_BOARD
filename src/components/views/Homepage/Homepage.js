import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { getAll, getFetchStatus, createActionFetchPosts } from '../../../redux/postsRedux.js';

import styles from './Homepage.module.scss';

import { Header } from '../../layout/Header/Header';
import { AddPostButton } from '../../common/AddPostButton/AddPostButton';
import { PostsList } from '../../features/PostsList/PostsList';

const Component = (
  {
    className, 
    login, 
    user, 
    posts, 
    activeFetch, 
    fetchPostsDispatch,
  }
) => {

  useEffect(() => {
    posts.length < 1 && !activeFetch && fetchPostsDispatch(posts, false, activeFetch);
  });

  return (
    <div className={clsx(className, styles.root)}>
      <Header />
      {login && <AddPostButton />}
      {!activeFetch ? <PostsList posts={posts} user={user.email}/> : <h3>Fetching ALL post ...</h3>}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  login: PropTypes.bool,
  user: PropTypes.object,
  posts: PropTypes.array,
  activeFetch: PropTypes.bool,
  fetchPostsDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  posts: getAll(state),
  activeFetch: getFetchStatus(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPostsDispatch: (posts, refetch, activeFetch) => dispatch(createActionFetchPosts(posts, refetch, activeFetch)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
