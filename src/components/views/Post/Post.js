import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

import { PostBar } from '../../features/PostBar/PostBar';
import { SinglePost} from '../../features/SinglePost/SinglePost';

const Component = ({className, children}) => {

  const { id } = useParams();

  return (
    <div className={clsx(className, styles.root)}>
      <PostBar id={id}/>
      <SinglePost id={id}/>
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
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
