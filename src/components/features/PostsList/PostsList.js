import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getPostByUser, getPostsState } from '../../../redux/postsRedux.js';

import styles from './PostsList.module.scss';

import { NoPosts } from '../../features/NoPosts/NoPosts';
import { PostsListElem } from '../../features/PostsListElem/PostsListElem';

import Box from '@mui/material/Box';
import List from '@mui/material/List';


const Component = ({className, children, posts, userId, postsState, userPosts}) => {

  return (
    <div className={clsx(className, styles.root)}>
      {posts.length > 0 ?
        (
          <Box   
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={1} py={1}
          >
            {!postsState ?
              (
                <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
                  {posts.map(post => <PostsListElem key={shortid.generate()} id={post.postId} post={post}/>)}
                </List>
              )
              :
              (
                <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
                  {userPosts.map(post => <PostsListElem key={shortid.generate()} id={post.postId} post={post}/>)}
                </List>
              )
            }
          </Box>
        )
        :
        (
          <NoPosts />
        )
      }
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
  userId: PropTypes.number,
  postsState: PropTypes.bool,
  userPosts: PropTypes.array,
};

const mapStateToProps = (state, props) => ({
  posts: getAll(state),
  postsState: getPostsState(state),
  userPosts: getPostByUser(state, props.userId) || [],
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostsList,
  Container as PostsList,
  Component as PostsListComponent,
};
