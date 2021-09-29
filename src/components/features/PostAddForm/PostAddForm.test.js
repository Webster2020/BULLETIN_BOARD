import React from 'react';
import { shallow } from 'enzyme';
import { PostAddFormComponent } from './PostAddForm';
import { MemoryRouter } from 'react-router-dom';

describe('Component PostAddForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><PostAddFormComponent/></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
