import React from 'react';

import styles from './Header.module.scss';

import { HomeBar } from '../../features/HomeBar/HomeBar';

const Component = () => (
  <div className={styles.root}>
    <HomeBar />
  </div>
);

export {
  Component as Header,
  Component as HeaderComponent,
};
