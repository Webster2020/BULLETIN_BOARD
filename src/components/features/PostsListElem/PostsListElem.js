import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { createActionFetchPostById } from '../../../redux/postsRedux.js';

import styles from './PostsListElem.module.scss';

import { Link } from 'react-router-dom';

import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const Component = (
  {
    className, 
    id, 
    post, 
    fetchPostByIdDispatch,
  }
) => {

  const clickHandler = () => {
    fetchPostByIdDispatch(id);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Link to={`/post/${id}`} style={{textDecoration: 'none'}}> 
        <button 
          className={styles.postButton} 
          onClick={clickHandler}
        >
          <div className={styles.content}>
            <div className={styles.avatar}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[700] }} alt="Remy Sharp">
                  {post.author.charAt(0)}
                </Avatar>
              </ListItemAvatar>
            </div>
            <div className={styles.text}>
              <div className={styles.postTitle}>{post.title.toUpperCase()}</div>
              <div className={styles.postText}>{post.text}</div>
            </div>
          </div>
          <div className={styles.date}>
            <div className={styles.created}>CREATED: {post.created}</div>
            <div className={styles.updated}>UPDATED: {post.updated}</div>
          </div>
        </button>
      </Link>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  post: PropTypes.object,
  fetchPostByIdDispatch: PropTypes.func,
  fetchPostDeleteDispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchPostByIdDispatch: (id) => dispatch(createActionFetchPostById(id)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as PostsListElem,
  Component as PostsListElemComponent,
};
