import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import styles from './HomeBar.module.scss';

import { LoginButton } from '../../common/LoginButton/LoginButton';
import { LogoutButton } from '../../common/LogoutButton/LogoutButton';
import { MyPostsButton } from '../../common/MyPostsButton/MyPostsButton';
import { RegisterButton } from '../../common/RegisterButton/RegisterButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Component = ({login, user}) => {

  return (
    <div className={styles.root}>
      <Box 
        sx={{ 
          flexGrow: 1,
        }}
      >
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BULLETIN BOARD
            </Typography>

            {!login ? 
              (
                <Stack direction="row" spacing={2}>
                  <LoginButton />
                  <RegisterButton />
                </Stack>
              ) 
              : 
              (
                <Stack direction="row" spacing={2}>
                  <MyPostsButton />
                  <LogoutButton />
                </Stack>
              )
            }

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

Component.propTypes = {
  login: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as HomeBar,
  Component as HomeBarComponent,
};
