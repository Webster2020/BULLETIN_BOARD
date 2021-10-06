import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { createActionDeletePost } from '../../../redux/postsRedux.js';

import styles from './DelPostButton.module.scss';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';


const Component = ({className, id, fetchPostDeleteDispatch}) => {

  const clickHandler = () => {
    console.log('CLICK ON X');
    fetchPostDeleteDispatch(id);
    console.log('THINK HOW RERENDER THIS COMPONENT AFTER REMOVING POST');
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        mx={2}
      >
        <Link to={`/post/del`} style={{textDecoration: 'none'}}>
          <Button variant="contained" onClick={clickHandler}>DEL POST</Button>
        </Link>
      </Stack>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  fetchPostDeleteDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  dupa: state,
});
const mapDispatchToProps = dispatch => ({
  fetchPostDeleteDispatch: (id) => dispatch(createActionDeletePost(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as DelPostButton,
  Container as DelPostButton,
  Component as DelPostButtonComponent,
};
