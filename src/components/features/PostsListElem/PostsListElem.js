import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getLoginStatus, getUserData } from '../../../redux/loginRedux.js';
import { createActionFetchPostById } from '../../../redux/postsRedux.js';

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


const Component = ({className, children, id, login, post, user, fetchPostByIdDispatch}) => {
  
  //const author = undefined;
  const postData = post;

  const clickHandler = () => {
    console.log('hhhhhhhhhhhhhhh');
    fetchPostByIdDispatch(id);
  };

  return (
    <div className={clsx(className, styles.root)}>
      
      <Divider variant="inset" component="li" />

      <Stack 
        my={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Link to={`/post/${id}`} style={{textDecoration: 'none'}}>
          <ListItem alignItems="center">
            <ListItemButton onClick={clickHandler}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp">
                  {/* {postData.author.charAt(0)} */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ minWidth: '200px', width: '500px' }}
                primary={postData.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {/* {author === undefined ? 'Noname' : author} */}
                    </Typography>
                    {` —  ${postData.text}`}
                  </React.Fragment>
                }
              />
              <ListItemText
                sx={{ marginLeft: '15px' }}
                primary={`Add date: ${postData.created}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {`Last update: ${postData.updated}`}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        </Link>
        {login && user.id === postData.authorId && <EditPostButton id={id}/>}
      
      </Stack>

      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  login: PropTypes.bool,
  post: PropTypes.object,
  user: PropTypes.object,
  fetchPostByIdDispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  login: getLoginStatus(state),
  // post: getPostById(state, props.id),
  user: getUserData(state),
  // admin: getAdminStatus(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPostByIdDispatch: (id) => dispatch(createActionFetchPostById(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostsListElem,
  Container as PostsListElem,
  Component as PostsListElemComponent,
};
