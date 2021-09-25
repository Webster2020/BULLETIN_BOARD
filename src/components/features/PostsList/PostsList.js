import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostsList.module.scss';

import { PostsListElem } from '../../features/PostsListElem/PostsListElem';

import Box from '@mui/material/Box';
import List from '@mui/material/List';


const Component = ({className, children}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Box   
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={1} py={1}
      >
        <List sx={{ width: '100%', maxWidth: 900, bgcolor: 'background.paper' }}>
          <PostsListElem />
          <PostsListElem />
          <PostsListElem />
        </List>
      </Box>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostsList,
  // Container as PostsList,
  Component as PostsListComponent,
};
