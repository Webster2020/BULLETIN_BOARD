import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createActionFetchPostById } from '../../../redux/postsRedux.js';

import styles from './EditPostButton.module.scss';

import Button from '@material-ui/core/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

const Component = ({id, fetchPostByIdDispatch}) => {

  const clickHandler = () => {
    fetchPostByIdDispatch(id);
  };

  return (
    <div className={styles.root}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        mx={0}
      >
        <Link to={`/post/${id}/edit`} style={{textDecoration: 'none'}}>
          <Button variant="contained" onClick={clickHandler}>
            <EditIcon/>
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
  fetchPostByIdDispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchPostByIdDispatch: id => dispatch(createActionFetchPostById(id)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as EditPostButton,
  Component as EditPostButtonComponent,
};
