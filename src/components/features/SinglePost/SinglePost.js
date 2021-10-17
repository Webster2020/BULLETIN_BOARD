import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';

import styles from './SinglePost.module.scss';

import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Component = ({post}) => {

  return (
    <div className={styles.root}>
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={1}
        mb={5}
      >
        <Card sx={{ maxWidth: 700 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: blue[800] }} aria-label="recipe">
                {post.author.charAt(0)}
              </Avatar>
            }
            title={post.title.toUpperCase()}
            subheader={post.created}
          />
          <CardMedia
            component="img"
            height="100%"
            image={post.photo}
            alt='No photo'
          />
          <Divider />
          <CardContent>
            <Typography variant="subtitle1" color="text.secondary">
              {post.text}
            </Typography>
          </CardContent>
          <Divider />
          {post.price && 
            <CardContent sx={{ paddingBottom: 1, paddingTop: 1 }}>
              <Typography sx={{fontSize: 14}} variant="subtitle2" color="text.secondary">
                PRICE: {post.price}
              </Typography>
            </CardContent>
          }
          {post.location &&
            <CardContent sx={{ paddingBottom: 1, paddingTop: 0 }}>
              <Typography sx={{fontSize: 12}} variant="subtitle2" color="text.secondary">
                LOCATION: {post.location}
              </Typography>
            </CardContent>
          }
          <Divider />
          <CardContent sx={{ paddingBottom: 1, paddingTop: 1 }}>
            <Typography sx={{fontSize: 12}} variant="subtitle2" color="text.secondary">
              EMAIL: {post.author}
            </Typography>
          </CardContent>
          {post.phone && 
            <CardContent sx={{ paddingBottom: 1, paddingTop: 0 }}>
              <Typography sx={{fontSize: 12}} variant="subtitle2" color="text.secondary">
                PHONE: {post.phone}
              </Typography>
            </CardContent>
          }
          <Divider />
          <CardContent sx={{ paddingBottom: 1, paddingTop: 1 }}>
            <Typography sx={{fontSize: 12}} variant="subtitle2" color="text.secondary">
              LAST UPDATE: {post.updated}
            </Typography>
          </CardContent>
          <Divider />
          <CardContent sx={{ paddingBottom: 0, paddingTop: 1 }}>
            <Typography sx={{fontSize: 12}} variant="subtitle2" color="text.secondary">
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
  post: PropTypes.object,
};

const mapStateToProps = (state) => ({
  post: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as SinglePost,
  Component as SinglePostComponent,
};
