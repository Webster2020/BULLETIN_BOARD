import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './NotFound.module.scss';

import { NotFoundBar } from '../../features/NotFoundBar/NotFoundBar';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <NotFoundBar />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
