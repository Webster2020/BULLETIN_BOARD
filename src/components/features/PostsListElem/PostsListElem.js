import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionFetchPostById } from '../../../redux/postsRedux.js';

import styles from './PostsListElem.module.scss';

import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Component = (
  {
    className, 
    id, 
    login, 
    post, 
    user, 
    fetchPostByIdDispatch,
  }
) => {

  const clickHandler = () => {
    fetchPostByIdDispatch(id);
  };

  return (
    <div className={clsx(className, styles.root)}> 
      <Stack 
        my={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          border: '1px solid red', 
          bgcolor: 'background.paper', 
          width: '100%',
        }}
      >
        <Link to={`/post/${id}`} style={{textDecoration: 'none'}}>
          <ListItem alignItems="center">
            <ListItemButton 
              onClick={clickHandler}         
              sx={{
                border: '1px solid orange',
                width: '100%',
              }}
            >
              <Stack 
                my={0}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp">
                    {post.author.charAt(0)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ 
                    // width: '50%',
                    border: '1px solid green',
                  }}
                  primary={post.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                      </Typography>
                      {` —  ${post.text}`}
                    </React.Fragment>
                  }
                />
                <ListItemText
                  sx={{ 
                    // width: '50%', 
                    marginLeft: '10px',
                    border: '1px solid green', 
                  }}
                  primary={`Add date: ${post.created}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {`Last update: ${post.updated}`}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </Stack>
            </ListItemButton>
          </ListItem>
        </Link>
      </Stack>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  login: PropTypes.bool,
  post: PropTypes.object,
  user: PropTypes.object,
  fetchPostByIdDispatch: PropTypes.func,
  fetchPostDeleteDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  login: getLoginStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPostByIdDispatch: (id) => dispatch(createActionFetchPostById(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostsListElem,
  Component as PostsListElemComponent,
};
