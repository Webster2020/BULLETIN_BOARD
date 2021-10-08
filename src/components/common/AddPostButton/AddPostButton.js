import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './AddPostButton.module.scss';

import { Link } from 'react-router-dom';

import AddBoxIcon from '@mui/icons-material/AddBox';
import Stack from '@mui/material/Stack';

const Component = ({className}) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={1}
        sx={{border: '0px solid red'}}
      >
        <Link to={`/post/add`} style={{textDecoration: 'none'}}>
          <AddBoxIcon color='primary' fontSize='large'/>
        </Link>
      </Stack>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as AddPostButton,
  Component as AddPostButtonComponent,
};
