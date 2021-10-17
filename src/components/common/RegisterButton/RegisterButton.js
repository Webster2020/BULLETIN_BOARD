import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const Component = ({registerDispatch}) => {

  const [formVisible, setFormVisible] = useState(false);
  const [registerValues, setRegisterValues] = useState(
    {
      name: '',
      email: '',
      password: '',
    }
  );

  const clickHandlerShow = () => {
    setFormVisible(!formVisible);
  };
  const handleChange = (value, type) => {
    setRegisterValues(
      {
        ...registerValues,
        [type]: value,
      }
    );
  };
  const clickHandlerConfirm = () => {
    registerDispatch(registerValues);
    setRegisterValues(
      {
        name: '',
        email: '',
        password: '',
      }
    );
    setFormVisible(false);
  };

  return (
    <div className={styles.root}>
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
              value={registerValues.name}
              onChange={event => handleChange(event.target.value, 'name')}
              fullWidth
            />
            <TextField
              id="outlined-email"
              label="Email (required)"
              value={registerValues.email}
              onChange={event => handleChange(event.target.value, 'email')}
              fullWidth
            />
            <TextField
              id="outlined-password"
              label="Password (required)"
              value={registerValues.password}
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
