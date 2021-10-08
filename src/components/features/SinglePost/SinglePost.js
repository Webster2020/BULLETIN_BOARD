import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { getPostById } from '../../../redux/postsRedux.js';
import { getAll } from '../../../redux/postsRedux.js';

import styles from './SinglePost.module.scss';

import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Component = ({className, post}) => {

  useEffect(() => {
    console.log('.......................');
    console.log('SINGLE POST');
    console.log(post);
    console.log('.......................');
  });

  return (
    <div className={clsx(className, styles.root)}>
      <Stack
        justifyContent="center"
        alignItems="center"
        my={5}
      >
        <Card sx={{ maxWidth: 700 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[800] }} aria-label="recipe">
                {post.author.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={post.created}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.author}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="400"
            image={post.photo}
            alt={post.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.text}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              EMAIL: {post.author}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              PHONE: {post.phone}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              PRICE: {post.price}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              LAST UPDATE: {post.updated}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              location: {post.location}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              STATUS: {post.status}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object,
};

// const mapStateToProps = (state, props) => ({
//   post: getPostById(state, props.id),
// });

const mapStateToProps = (state) => ({
  post: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as SinglePost,
  Container as SinglePost,
  Component as SinglePostComponent,
};
