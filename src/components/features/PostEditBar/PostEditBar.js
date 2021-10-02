import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import styles from './PostEditBar.module.scss';

import { BackHomeButton } from '../../common/BackHomeButton/BackHomeButton';
import { SaveEditedPostButton } from '../../common/SaveEditedPostButton/SaveEditedPostButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Component = ({className, children, id, login, user}) => {

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
            <BackHomeButton />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              POST {id} (EDIT)
            </Typography>
            <SaveEditedPostButton />
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
  id: PropTypes.string,
  login: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as PostEditBar,
  Container as PostEditBar,
  Component as PostEditBarComponent,
};