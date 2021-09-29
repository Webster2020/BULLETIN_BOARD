import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';

import styles from './PostsList.module.scss';

import { PostsListElem } from '../../features/PostsListElem/PostsListElem';

import Box from '@mui/material/Box';
import List from '@mui/material/List';


const Component = ({className, children, posts}) => {

  useEffect(() => {
    console.log(posts);
  });

  return (
    <div className={clsx(className, styles.root)}>
      <Box   
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={1} py={1}
      >
        <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
          {/* <PostsListElem id={1}/>
          <PostsListElem id={2}/> */}
          {posts.map((post => console.log(post.postId)))}
          {posts.map(post => <PostsListElem key={shortid.generate()} id={post.postId} post={post}/>)}
        </List>
      </Box>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  posts: getAll(state),
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
