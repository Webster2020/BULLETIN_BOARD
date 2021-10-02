import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus } from '../../../redux/loginRedux.js';

import styles from './PostAdd.module.scss';

import { PostAddBar } from '../../features/PostAddBar/PostAddBar';
import { PostAddForm } from '../../features/PostAddForm/PostAddForm';
import { NotFound } from '../../views/NotFound/NotFound'; 

const Component = ({className, children, login}) => {
  return (
    <div className={clsx(className, styles.root)}>
      {login ? 
        (
          <div>
            <PostAddBar />
            <PostAddForm />
            {children}
          </div>
        )
        :
        (
          <NotFound />
        )
      }
    </div>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  login: PropTypes.bool,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
