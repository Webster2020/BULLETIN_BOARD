import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './PostEdited.module.scss';

import { PostEditedBar } from '../../features/PostEditedBar/PostEditedBar';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <PostEditedBar />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as PostEdited,
  Component as PostEditedComponent,
};
