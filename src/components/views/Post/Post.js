import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';

import { getFetchStatus } from '../../../redux/postsRedux.js';

import styles from './Post.module.scss';

import { PostBar } from '../../features/PostBar/PostBar';
import { SinglePost} from '../../features/SinglePost/SinglePost';

const Component = ({className, activeFetch}) => {

  useEffect(() => {
    console.log('active fetching... : ' + activeFetch);
  });

  const { id } = useParams();

  return (
    <div className={clsx(className, styles.root)}>
      <PostBar id={id}/>
      {!activeFetch ? <SinglePost/> : <h3>Fetching post by ID...</h3>} 
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  activeFetch: PropTypes.bool,
};

const mapStateToProps = state => ({
  activeFetch: getFetchStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Post,
  Component as PostComponent,
};
