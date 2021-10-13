import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { 
  getLoginStatus, 
  getUserData, 
  createActionLogin, 
  // createActionLoginWithGoogle,
  createActionLoginDB, 
  // createActionRegisterDB, 
} from '../../../redux/loginRedux.js';

import styles from './LoginButton.module.scss';

import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Component = (
  {
    className, 
    setLoginStatusDispatch, 
    // loginWithGoogleDispatch,
    loginDispatch,
    // registerDispatch,
  }
) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const clickHandlerShow = () => {
    console.log(formVisible);
    setFormVisible(!formVisible);
  };

  const clickHandlerConfirm = () => {
    console.log(email + ' / ' + password);
    setLoginStatusDispatch(true);
    // loginWithGoogleDispatch();
    loginDispatch(
      {
        email: email, 
        password: password,
      }
    );
    // registerDispatch();
  };

  return (
    <div className={clsx(className, styles.root)}>
      {/* <Button variant="contained" onClick={() => clickHandler()}>LOGIN</Button> */}
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
              value={email}
              onChange={handleChangeEmail}
              fullWidth
            />
            <TextField
              id="outlined-password"
              label="password"
              value={password}
              onChange={handleChangePassword}
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
  className: PropTypes.string,
  setLoginStatusDispatch: PropTypes.func,
  // loginWithGoogleDispatch: PropTypes.func,
  loginDispatch: PropTypes.func,
  // registerDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  setLoginStatusDispatch: bool => dispatch(createActionLogin(bool)),
  // loginWithGoogleDispatch: () => dispatch(createActionLoginWithGoogle()),
  loginDispatch: (user) => dispatch(createActionLoginDB(user)),
  // registerDispatch: () => dispatch(createActionRegisterDB({name: 'michal', email: 'michal@michal.com', password: 'michal1'})),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as LoginButton,
  Component as LoginButtonComponent,
};
