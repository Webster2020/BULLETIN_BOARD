import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll, createActionFetchPosts } from '../../../redux/postsRedux.js';

import styles from './BackHomeButton.module.scss';

import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';

const Component = ({posts, fetchPostsDispatch}) => {

  const clickHandler = () => {
    fetchPostsDispatch(posts, true);
  };

  return (
    <div className={styles.root}>
      <Box   
        display="flex"
        justifyContent="center"
        alignItems="center"
        mr={3}
      >
        <Link to={'/'} style={{textDecoration: 'none'}}>
          <Button variant="contained" onClick={clickHandler}>HOME</Button>
        </Link>
      </Box>
    </div>
  );
};

Component.propTypes = {
  posts: PropTypes.any,
  fetchPostsDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPostsDispatch: (posts, refetch) => dispatch(createActionFetchPosts(posts, refetch)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as BackHomeButton,
  Component as BackHomeButtonComponent,
};