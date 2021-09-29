import React, { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux.js';

import styles from './PostEditForm.module.scss';

import { SaveEditedPostButton } from '../../common/SaveEditedPostButton/SaveEditedPostButton';
import { SinglePost} from '../../features/SinglePost/SinglePost';

import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const Component = ({className, children, id, post}) => {

  const postData = post;

  const today = new Date();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month = (today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : (today.getMonth() + 1);
  const year = today.getFullYear();
  const currentDate = `${day}/${month}/${year}`;
  console.log('CURRENT DATA:' + currentDate);

  const [titleChecked, setTitleChecked] = useState(false);
  const [title, setTitle] = useState(postData.title);

  const [contentChecked, setContentChecked] = useState(false);
  const [content, setContent] = useState(postData.content);

  const [imageChecked, setImageChecked] = useState(false);
  const [image, setImage] = useState(postData.image);

  const [priceChecked, setPriceChecked] = useState(false);
  const [price, setPrice] = useState(postData.price);

  const [phoneChecked, setPhoneChecked] = useState(false);
  const [phone, setPhone] = useState(postData.phone);

  const [localizationChecked, setLocalizationChecked] = useState(false);
  const [localization, setLocalization] = useState(postData.localization);

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

  const handleCheckLocalization = (event) => {
    setLocalizationChecked(event.target.checked);
  };
  const handleChangeLocalization = (event) => {
    setLocalization(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>

      <div className={styles.column}>
        <h2>PostEditForm {id}</h2>

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
            {!imageChecked ? 
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
            {!localizationChecked ? 
              (<TextField
                id="outlined-localization"
                label="Localization"
                value={localization}
                onChange={handleChangeLocalization}
                fullWidth
                disabled
              />)
              :
              (<TextField
                id="outlined-localization"
                label="Localization"
                value={localization}
                onChange={handleChangeLocalization}
                fullWidth
              />)
            }
            <Checkbox
              checked={localizationChecked}
              onChange={handleCheckLocalization}
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
            postData={postData} 
            title={title}
            content={content}
            image={image}
            price={price}
            phone={phone}
            localization={localization}
            update={currentDate}
          />
        </Stack>
      </div>
      
      <div className={styles.column}>
        <SinglePost id={id}/>
      </div>

      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
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
