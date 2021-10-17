import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createActionDeletePost } from '../../../redux/postsRedux.js';

import styles from './DelPostButton.module.scss';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const Component = ({id, fetchPostDeleteDispatch}) => {

  const clickHandler = () => {
    fetchPostDeleteDispatch(id);
  };

  return (
    <div className={styles.root}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent="center"
        alignItems="center"
        mx={2}
      >
        <Link to={`/post/del`} style={{textDecoration: 'none'}}>
          <Button variant="contained" onClick={clickHandler}>
            <DeleteIcon/>
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
  fetchPostDeleteDispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  fetchPostDeleteDispatch: (id) => dispatch(createActionDeletePost(id)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as DelPostButton,
  Component as DelPostButtonComponent,
};
