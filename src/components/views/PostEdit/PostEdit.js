import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostEdit.module.scss';

import { PostEditBar } from '../../features/PostEditBar/PostEditBar';
import { PostEditForm } from '../../features/PostEditForm/PostEditForm';

const Component = ({className, children}) => {
 
  const { id } = useParams();

  return (
    <div className={clsx(className, styles.root)}>
      <PostEditBar id={id} />
      <PostEditForm id={id} />
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);