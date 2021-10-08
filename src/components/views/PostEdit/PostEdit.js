import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getFetchStatus } from '../../../redux/postsRedux.js';

import styles from './PostEdit.module.scss';

import { PostEditBar } from '../../features/PostEditBar/PostEditBar';
import { PostEditForm } from '../../features/PostEditForm/PostEditForm';

const Component = ({className, activeFetch}) => {
 
  const { id } = useParams();

  return (
    <div className={clsx(className, styles.root)}>
      <PostEditBar id={id} />
      {!activeFetch ? <PostEditForm id={id} /> : <h3>Fetching post by ID ...</h3>}
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
  Container as PostEdit,
  Component as PostEditComponent,
};