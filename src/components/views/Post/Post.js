import React from 'react';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';

import { getFetchStatus } from '../../../redux/postsRedux.js';

import styles from './Post.module.scss';

import { PostBar } from '../../features/PostBar/PostBar';
import { SinglePost} from '../../features/SinglePost/SinglePost';

import CircularProgress from '@mui/material/CircularProgress';

const Component = ({className, activeFetch}) => {

  const { id } = useParams();

  return (
    <div className={clsx(className, styles.root)}>
      <PostBar id={id}/>
      {!activeFetch ? 
        <div className={styles.postWrapper}>
          <SinglePost/>
        </div> 
        : 
        <div className={styles.progressWrapper}>
          <CircularProgress />
        </div>
      } 
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
