import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';

import { getAll } from '../../../redux/postsRedux.js';

import styles from './PostBar.module.scss';

import { DelPostButton } from '../../common/DelPostButton/DelPostButton.js';
import { EditPostButton } from '../../common/EditPostButton/EditPostButton';
import { LoginButton } from '../../common/LoginButton/LoginButton';
import { LogoutButton } from '../../common/LogoutButton/LogoutButton';
import { BackHomeButton } from '../../common/BackHomeButton/BackHomeButton';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Component = (
  
  {className, 
    id, 
    login,
    post, 
    user,
  }
) => {

  // const [auth, setAuth] = useState(false);
  // useEffect(() => {
  //   console.log(login);
  // });

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
              POST {id}
            </Typography>

            {!login ? 
              (
                <LoginButton />
              ) 
              : 
              (
                <Stack direction="row" spacing={2}>
                  {user.email === post.author && <EditPostButton id={id}/>}
                  {user.email === post.author && <DelPostButton id={id}/>}
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
  className: PropTypes.string,
  id: PropTypes.string,
  login: PropTypes.bool,
  post: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  user: getUserData(state),
  post: getAll(state),
  //admin: getAdminStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostBar,
  Container as PostBar,
  Component as PostBarComponent,
};
