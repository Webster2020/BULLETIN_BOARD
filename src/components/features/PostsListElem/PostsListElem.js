import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus } from '../../../redux/loginRedux.js';

import styles from './PostsListElem.module.scss';

import { EditPostButton } from '../../common/EditPostButton/EditPostButton';

import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Component = ({className, children, id, login}) => {
  
  const author = undefined;

  return (
    <div className={clsx(className, styles.root)}>
      
      <Divider variant="inset" component="li" />

      <Stack 
        my={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Link to={`/post/${id}`} style={{textDecoration: 'none'}}>
          <ListItem alignItems="center">
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {author === undefined ? 'Bill Gates' : author}
                    </Typography>
                    {' — I\'ll be in your neighborhood doing errands this…'}
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        </Link>
        {login && <EditPostButton />}
      
      </Stack>

      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.number,
  login: PropTypes.bool,
};

const mapStateToProps = state => ({
  login: getLoginStatus(state),
  // user: getUserData(state),
  // admin: getAdminStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostsListElem,
  Container as PostsListElem,
  Component as PostsListElemComponent,
};
