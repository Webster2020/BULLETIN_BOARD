import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import shortid from 'shortid';

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
  const [status, setStatus] = useState('draft');

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
    setPrice(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
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

          <TextField
            id="outlined-title"
            label="Title"
            value={title}
            onChange={handleChangeTitle}
            fullWidth
          />

          <TextField
            id="outlined-text"
            label="Text"
            value={text}
            onChange={handleChangeText}
            fullWidth
          />

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
            label="location"
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
            // postId={shortid.generate()}
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
          />
        </Stack>
      </div>

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  // login: PropTypes.bool,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  // login: getLoginStatus(state),
  user: getUserData(state),
  //admin: getAdminStatus(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as PostAddForm,
  Container as PostAddForm,
  Component as PostAddFormComponent,
};
