import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import styles from './PostEditBar.module.scss';

import { BackHomeButton } from '../../common/BackHomeButton/BackHomeButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Component = ({id, login, user}) => {

  return (
    <div className={styles.root}>
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={login}
                aria-label="login switch"
                disabled
              />
            }
            label={login ? `${user.name} is loged` : 'Welcome - please login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <BackHomeButton />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POST /{id}/ (EDIT)
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

Component.propTypes = {
  id: PropTypes.string,
  login: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PostEditBar,
  Component as PostEditBarComponent,
};
