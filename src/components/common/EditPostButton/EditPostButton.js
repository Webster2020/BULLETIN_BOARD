import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { createActionFetchPostById } from '../../../redux/postsRedux.js';

import styles from './EditPostButton.module.scss';

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';


const Component = ({className, id, fetchPostByIdDispatch}) => {

  const clickHandler = () => {
    console.log('CLICK ON EDIT BUTTON');
    fetchPostByIdDispatch(id);
    console.log('===========================');
    console.log('FETCHED POST (EDITBUTTON)');
    // console.log(post);
    console.log('===========================');
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
        <Link to={`/post/${id}/edit`} style={{textDecoration: 'none'}}>
          <Button variant="contained" onClick={clickHandler}>EDIT POST</Button>
        </Link>
      </Stack>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  fetchPostByIdDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  dupa: state,
});
const mapDispatchToProps = dispatch => ({
  fetchPostByIdDispatch: (id) => dispatch(createActionFetchPostById(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as EditPostButton,
  Container as EditPostButton,
  Component as EditPostButtonComponent,
};
