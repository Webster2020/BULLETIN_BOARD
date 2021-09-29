import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getUserData } from '../../../redux/loginRedux.js';

import styles from './PostAddForm.module.scss';

import { SaveAddedPostButton } from '../../common/SaveAddedPostButton/SaveAddedPostButton';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Component = ({className, children, user}) => {

  const today = new Date();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month = (today.getMonth() + 1) < 10 ? `0${today.getMonth() + 1}` : (today.getMonth() + 1);
  const year = today.getFullYear();
  const currentDate = `${day}/${month}/${year}`;
  console.log(currentDate);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [localization, setLocalization] = useState('');
  const [status, setStatus] = useState('draft');

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };
  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleChangePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleChangeLocalization = (event) => {
    setLocalization(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className={clsx(className, styles.root)}>

      <div className={styles.column}>
        <h2>PostAddForm</h2>

        <Stack
          component="form"
          sx={{
            '& > :not(style)': { m: 1, maxWidth: '500px' },
          }}
          direction='column'
          justifyContent="center"
          alignItems="center"
          ml={5}
          mb={5}
        >

          <TextField
            id="outlined-title"
            label="Title"
            value={title}
            onChange={handleChangeTitle}
            fullWidth
          />

          <TextField
            id="outlined-content"
            label="Content"
            value={content}
            onChange={handleChangeContent}
            fullWidth
          />

          <TextField
            id="outlined-image"
            label="Image"
            value={image}
            onChange={handleChangeImage}
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
            id="outlined-localization"
            label="Localization"
            value={localization}
            onChange={handleChangeLocalization}
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
            postId={shortid.generate()}
            authorId={user.id}
            author={`${user.name} ${user.surname}`}
            title={title}
            content={content}
            date={currentDate}
            update={currentDate}
            email={user.email}
            status={status}
            image={image}
            price={price}
            phone={phone}
            localization={localization}
          />
        </Stack>
      </div>

      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
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
