import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux.js';

import styles from './PostEditForm.module.scss';

// import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const Component = ({className, children, id, post}) => {

  const postData = post[0];

  const [titleChecked, setTitleChecked] = useState(false);
  const [title, setTitle] = useState(postData.title);
  const [contentChecked, setContentChecked] = useState(false);
  const [content, setContent] = useState(postData.content);
  const [imageChecked, setImageChecked] = useState(false);
  const [image, setImage] = useState(postData.image);

  const handleCheckTitle = (event) => {
    setTitleChecked(event.target.checked);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleCheckContent = (event) => {
    setContentChecked(event.target.checked);
  };
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleCheckImage = (event) => {
    setImageChecked(event.target.checked);
  };
  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h2>PostEditForm {id}</h2>

      <Stack
        component="form"
        sx={{
          '& > :not(style)': { m: 1, maxWidth: '500px' },
        }}
        direction='column'
        ml={5}
      >

        <Stack direction="row" spacing={2}>
          {!titleChecked ? 
            (<TextField
              id="outlined-title"
              label="Title"
              value={title}
              onChange={handleChangeTitle}
              fullWidth
              disabled
            />)
            :
            (<TextField
              id="outlined-title"
              label="Title"
              value={title}
              onChange={handleChangeTitle}
              fullWidth
            />) 
          }
          <Checkbox
            checked={titleChecked}
            onChange={handleCheckTitle}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          {!contentChecked ? 
            (<TextField
              id="outlined-content"
              label="Content"
              value={content}
              onChange={handleChangeContent}
              fullWidth
              disabled
            />)
            :
            (<TextField
              id="outlined-content"
              label="Content"
              value={content}
              onChange={handleChangeContent}
              fullWidth
            />)
          }
          <Checkbox
            checked={contentChecked}
            onChange={handleCheckContent}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          {!contentChecked ? 
            (<TextField
              id="outlined-image"
              label="Image"
              value={image}
              onChange={handleChangeImage}
              fullWidth
              disabled
            />)
            :
            (<TextField
              id="outlined-image"
              label="Image"
              value={image}
              onChange={handleChangeImage}
              fullWidth
            />)
          }
          <Checkbox
            checked={imageChecked}
            onChange={handleCheckImage}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Stack>

      </Stack>

      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.number,
  post: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEditForm,
  Container as PostEditForm,
  Component as PostEditFormComponent,
};
