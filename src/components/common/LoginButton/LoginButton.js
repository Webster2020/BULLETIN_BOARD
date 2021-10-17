import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { 
  getLoginStatus, 
  getUserData, 
  createActionLogin, 
  createActionLoginDB, 
  // createActionLoginWithGoogle,
} from '../../../redux/loginRedux.js';

import styles from './LoginButton.module.scss';

import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Component = (
  {
    setLoginStatusDispatch, 
    loginDispatch,
    // loginWithGoogleDispatch,
  }
) => {

  const [formVisible, setFormVisible] = useState(false);
  const [loginValues, setLoginValues] = useState(
    {
      email: '',
      password: '',
    }
  );

  const clickHandlerShow = () => {
    setFormVisible(!formVisible);
  };
  const handleChange = (value, type) => {
    setLoginValues(
      {
        ...loginValues,
        [type]: value,
      }
    );
  };
  const clickHandlerConfirm = () => {
    setLoginStatusDispatch(true);
    loginDispatch(loginValues);
    // loginWithGoogleDispatch();
  };

  return (
    <div className={styles.root}>
      <Button variant="contained" onClick={() => clickHandlerShow()}>LOGIN</Button>
      {formVisible &&
        (<div className={styles.formWrapper}>
          <Stack
            component="form"
            sx={{
              '& > :not(style)': { m: 1, maxWidth: '500px' },
            }}
            direction='column'
            justifyContent="center"
            alignItems="center"
            mb={2}
          >
            <TextField
              id="outlined-email"
              label="email"
              value={loginValues.email}
              onChange={event => handleChange(event.target.value, 'email')}
              fullWidth
            />
            <TextField
              id="outlined-password"
              label="password"
              value={loginValues.password}
              onChange={event => handleChange(event.target.value, 'password')}
              fullWidth
            />
          </Stack>
          <Button variant="contained" onClick={() => clickHandlerConfirm()}>CONFIRM</Button>
        </div>)
      }
    </div>
  );
};

Component.propTypes = {
  setLoginStatusDispatch: PropTypes.func,
  loginDispatch: PropTypes.func,
  // loginWithGoogleDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  setLoginStatusDispatch: bool => dispatch(createActionLogin(bool)),
  loginDispatch: user => dispatch(createActionLoginDB(user)),
  // loginWithGoogleDispatch: () => dispatch(createActionLoginWithGoogle()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LoginButton,
  Component as LoginButtonComponent,
};
