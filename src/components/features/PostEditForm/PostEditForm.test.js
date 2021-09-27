import React from 'react';
import { shallow } from 'enzyme';
import { PostEditFormComponent } from './PostEditForm';
import { MemoryRouter } from 'react-router-dom';

describe('Component PostEditForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><PostEditFormComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
