import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUserData } from '../../../redux/loginRedux.js';

import styles from './PostAddForm.module.scss';

import { SaveAddedPostButton } from '../../common/SaveAddedPostButton/SaveAddedPostButton';
import { currentDate } from '../../../utils/currentDate';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Component = ({className, user}) => {

  const today = currentDate();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('published');

  const [titleValidation, setTitleValidation] = useState('');
  const [textValidation, setTextValidation] = useState('');

  useEffect(() => {
    console.log('title: ', titleValidation);
    console.log('text: ', textValidation);
  });

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const handleChangePhoto = (event) => {
    setPhoto(event.target.value);
  };
  const handleChangePrice = (event) => {
    const priceRegex = /[0-9]/;
    if(priceRegex.test(event.target.value) || event.target.value === '') {
      setPrice(event.target.value);
    }
  };
  const handleChangePhone = (event) => {
    const phoneRegex = /[0-9]/;
    if(phoneRegex.test(event.target.value) || event.target.value === '') {
      setPhone(event.target.value);
    }
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const validation = (addingPost) => {
    console.log('<<VALIDATION>>');
    let isValid = false;

    if(addingPost.title === '') {
      setTitleValidation('empty title!');
      isValid = false;
    } else if (addingPost.title.length < 10) {  
      setTitleValidation('title is too short!');
      isValid = false;
    } else if (addingPost.title.length > 40) {  
      setTitleValidation('title is too long!');
      isValid = false;
    } else {
      setTitleValidation('correct');
      isValid = true;
    }

    if(addingPost.text === '') {
      setTextValidation('empty text!');
      isValid = false;
    } else if (addingPost.text.length < 20) {  
      setTextValidation('text is too short!');
      isValid = false;
    } else if (addingPost.text.length > 100) {  
      setTextValidation('text is too long!');
      isValid = false;
    } else {
      setTextValidation('correct');
      isValid = true;
    }

    if(isValid) {
      console.log('VALIDATION OK!');
      return true;
    }

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
          justifyContent="center"
          alignItems="center"
          my={5}
        >
          <div className={`${styles.validationWrapper} ${titleValidation !== 'correct' && titleValidation !== '' && styles.validationError}`}>
            <TextField
              id="outlined-title"
              label="Title (required)"
              value={title}
              onChange={handleChangeTitle}
              fullWidth
            />
            {titleValidation !== 'correct' && titleValidation !== '' && <div className={styles.validation}>{titleValidation}</div>}
          </div>

          <div className={`${styles.validationWrapper} ${textValidation !== 'correct' && textValidation !== '' && styles.validationError}`}>
            <TextField
              id="outlined-text"
              label="Text (required)"
              value={text}
              onChange={handleChangeText}
              fullWidth
            />
            {textValidation !== 'correct' && textValidation !== '' && <div className={styles.validation}>{textValidation}</div>}
          </div>

          <TextField
            id="outlined-photo"
            label="Photo"
            value={photo}
            onChange={handleChangePhoto}
            fullWidth
          />

          <TextField
            id="outlined-price"
            label="Price [$]"
            value={price}
            onChange={handleChangePrice}
            fullWidth
          />

          <TextField
            id="outlined-phone"
            label="Phone"
            value={phone}
            onChange={handleChangePhone}
            fullWidth
          />

          <TextField
            id="outlined-location"
            label="Location"
            value={location}
            onChange={handleChangeLocation}
            fullWidth
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Status"
              onChange={handleChangeStatus}
              disabled
            >
              <MenuItem value={'published'}>published</MenuItem>
              <MenuItem value={'draft'}>draft</MenuItem>
              <MenuItem value={'closed'}>closed</MenuItem>
            </Select>
          </FormControl>

        </Stack>
        
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
          alignItems="center"
          my={5}
        >
          <SaveAddedPostButton  
            author={user.email}
            authorName={`${user.name} ${user.surname}`}
            title={title}
            text={text}
            created={today}
            updated={today}
            status={status}
            photo={photo}
            price={price}
            phone={phone}
            location={location}
            validation={validation}
          />
        </Stack>
      </div>

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: getUserData(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as PostAddForm,
  Component as PostAddFormComponent,
};
