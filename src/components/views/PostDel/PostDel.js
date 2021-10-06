import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './PostDel.module.scss';

import { PostDelBar } from '../../features/PostDelBar/PostDelBar';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <PostDelBar />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as PostDel,
  Component as PostDelComponent,
};
