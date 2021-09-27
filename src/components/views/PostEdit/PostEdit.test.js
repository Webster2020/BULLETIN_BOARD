import React from 'react';
import { shallow } from 'enzyme';
import { PostEditComponent } from './PostEdit';
import { MemoryRouter } from 'react-router-dom';

describe('Component PostEdit', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><PostEditComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
