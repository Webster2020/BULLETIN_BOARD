import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './PostAdded.module.scss';

import { PostAddedBar } from '../../features/PostAddedBar/PostAddedBar';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <PostAddedBar />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as PostAdded,
  Component as PostAddedComponent,
};
