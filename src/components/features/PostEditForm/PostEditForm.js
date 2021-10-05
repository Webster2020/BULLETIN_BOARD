import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, getFetchStatus } from '../../../redux/postsRedux.js';

import styles from './PostEditForm.module.scss';

import { SaveEditedPostButton } from '../../common/SaveEditedPostButton/SaveEditedPostButton';
import { SinglePost} from '../../features/SinglePost/SinglePost';

import { currentDate } from '../../../utils/currentDate';

import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const Component = ({className, id, post, activeFetch}) => {

  const today = currentDate();

  const [titleChecked, setTitleChecked] = useState(false);
  const [title, setTitle] = useState(post.title);

  const [textChecked, setTextChecked] = useState(false);
  const [text, setText] = useState(post.text);

  const [photoChecked, setPhotoChecked] = useState(false);
  const [photo, setPhoto] = useState(post.photo);

  const [priceChecked, setPriceChecked] = useState(false);
  const [price, setPrice] = useState(post.price);

  const [phoneChecked, setPhoneChecked] = useState(false);
  const [phone, setPhone] = useState(post.phone);

  const [locationChecked, setlocationChecked] = useState(false);
  const [location, setlocation] = useState(post.location);

  const handleCheckTitle = (event) => {
    setTitleChecked(event.target.checked);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleCheckText = (event) => {
    setTextChecked(event.target.checked);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleCheckPhoto = (event) => {
    setPhotoChecked(event.target.checked);
  };
  const handleChangePhoto = (event) => {
    setPhoto(event.target.value);
  };

  const handleCheckPrice = (event) => {
    setPriceChecked(event.target.checked);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleCheckPhone = (event) => {
    setPhoneChecked(event.target.checked);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleChecklocation = (event) => {
    setlocationChecked(event.target.checked);
  };
  const handleChangelocation = (event) => {
    setlocation(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>

      <div className={styles.column}>

        <Stack
          component="form"
          sx={{
            '& > :not(style)': { m: 1, maxWidth: '500px' },
          }}
          direction='column'
          ml={5}
          mb={5}
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
            {!textChecked ? 
              (<TextField
                id="outlined-text"
                label="Text"
                value={text}
                onChange={handleChangeText}
                fullWidth
                disabled
              />)
              :
              (<TextField
                id="outlined-text"
                label="Text"
                value={text}
                onChange={handleChangeText}
                fullWidth
              />)
            }
            <Checkbox
              checked={textChecked}
              onChange={handleCheckText}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            {!photoChecked ? 
              (<TextField
                id="outlined-photo"
                label="Photo"
                value={photo}
                onChange={handleChangePhoto}
                fullWidth
                disabled
              />)
              :
              (<TextField
                id="outlined-photo"
                label="Photo"
                value={photo}
                onChange={handleChangePhoto}
                fullWidth
              />)
            }
            <Checkbox
              checked={photoChecked}
              onChange={handleCheckPhoto}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            {!priceChecked ? 
              (<TextField
                id="outlined-price"
                label="Price [$]"
                value={price}
                onChange={handleChangePrice}
                fullWidth
                disabled
              />)
              :
              (<TextField
                id="outlined-price"
                label="Price [$]"
                value={price}
                onChange={handleChangePrice}
                fullWidth
              />)
            }
            <Checkbox
              checked={priceChecked}
              onChange={handleCheckPrice}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            {!phoneChecked ? 
              (<TextField
                id="outlined-phone"
                label="Phone"
                value={phone}
                onChange={handleChangePhone}
                fullWidth
                disabled
              />)
              :
              (<TextField
                id="outlined-phone"
                label="Phone"
                value={phone}
                onChange={handleChangePhone}
                fullWidth
              />)
            }
            <Checkbox
              checked={phoneChecked}
              onChange={handleCheckPhone}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Stack>

          <Stack direction="row" spacing={2}>
            {!locationChecked ? 
              (<TextField
                id="outlined-location"
                label="location"
                value={location}
                onChange={handleChangelocation}
                fullWidth
                disabled
              />)
              :
              (<TextField
                id="outlined-location"
                label="location"
                value={location}
                onChange={handleChangelocation}
                fullWidth
              />)
            }
            <Checkbox
              checked={locationChecked}
              onChange={handleChecklocation}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </Stack>

        </Stack>
        
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <SaveEditedPostButton 
            post={post} 
            title={title}
            text={text}
            photo={photo}
            price={price}
            phone={phone}
            location={location}
            updated={today}
          />
        </Stack>
      </div>
      
      <div className={styles.column}>
        {!activeFetch ? <SinglePost id={id}/> : <h3>Loading data...</h3>}
      </div>

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  post: PropTypes.object,
  activeFetch: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  post: getAll(state),
  activeFetch: getFetchStatus(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostEditForm,
  Container as PostEditForm,
  Component as PostEditFormComponent,
};
