import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Header.module.scss';

import { HomeBar } from '../../features/HomeBar/HomeBar';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <HomeBar />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
