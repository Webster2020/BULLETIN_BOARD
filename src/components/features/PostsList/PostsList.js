import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import { connect } from 'react-redux';
import { getPostByUser, getPostsState } from '../../../redux/postsRedux.js';

import styles from './PostsList.module.scss';

import { NoPosts } from '../../features/NoPosts/NoPosts';
import { PostsListElem } from '../../features/PostsListElem/PostsListElem';

import Box from '@mui/material/Box';
import List from '@mui/material/List';

const Component = (
  {
    posts, 
    user, 
    postsState, 
    userPosts, 
  }
) => {

  return (
    <div className={styles.root}>
      {posts.length > 0 ?
        (
          <Box   
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={1} py={1}
            sx={{ p: 2, border: '0px dashed green' }}
          >
            <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'inherit' }}>
              {
                !postsState ?
                  posts.map(post => <PostsListElem key={shortid.generate()} id={post._id} post={post}/>)
                  :
                  userPosts.map(post => <PostsListElem key={shortid.generate()} id={post._id} post={post}/>)
              }
            </List>
          </Box>
        )
        :
        (
          <NoPosts />
        )
      }
    </div>
  );
};

Component.propTypes = {
  posts: PropTypes.array,
  user: PropTypes.string,
  postsState: PropTypes.bool,
  userPosts: PropTypes.array,
};

const mapStateToProps = (state, {user}) => ({
  postsState: getPostsState(state),
  userPosts: getPostByUser(state, user) || [],
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PostsList,
  Component as PostsListComponent,
};
