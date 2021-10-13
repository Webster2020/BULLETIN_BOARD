import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { 
  getLoginStatus, 
  getUserData, 
  createActionRegisterDB, 
} from '../../../redux/loginRedux.js';

import styles from './RegisterButton.module.scss';

import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Component = (
  {
    className, 
    registerDispatch,
  }
) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
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
    registerDispatch(
      {
        name: name,
        email: email,
        password: password,
      }
    );
    setName('');
    setEmail('');
    setPassword('');
    setFormVisible(false);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Button variant="contained" onClick={() => clickHandlerShow()}>REGISTER</Button>
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
              id="outlined-name"
              label="Name (required)"
              value={name}
              onChange={handleChangeName}
              fullWidth
            />
            <TextField
              id="outlined-email"
              label="Email (required)"
              value={email}
              onChange={handleChangeEmail}
              fullWidth
            />
            <TextField
              id="outlined-password"
              label="Password (required)"
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
  registerDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  registerDispatch: (newUser) => dispatch(createActionRegisterDB(newUser)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as RegisterButton,
  Component as RegisterButtonComponent,
};
