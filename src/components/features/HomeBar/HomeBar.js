import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import styles from './HomeBar.module.scss';

import { LoginButton } from '../../common/LoginButton/LoginButton';
import { LogoutButton } from '../../common/LogoutButton/LogoutButton';
import { MyPostsButton } from '../../common/MyPostsButton/MyPostsButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Component = ({className, children, login, user}) => {

  // const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log(login);
  });

  const handleChange = (event) => {
    console.log(event.target.checked);
    //setAuth(event.target.checked);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Box sx={{ flexGrow: 1 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={login}
                onChange={handleChange}
                aria-label="login switch"
                disabled
              />
            }
            label={login ? `${user.name} is loged` : 'Welcome - please login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BULLETIN BOARD
            </Typography>

            {!login ? (
              <LoginButton />
            ) : 
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
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  login: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   setLoginStatusDispatch: arg => dispatch(creatActionSetLoginStatus(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as HomeBar,
  Container as HomeBar,
  Component as HomeBarComponent,
};
