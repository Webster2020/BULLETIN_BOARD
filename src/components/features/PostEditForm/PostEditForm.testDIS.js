import React from 'react';
import { shallow } from 'enzyme';
import { PostEditFormComponent } from './PostEditForm';

describe('Component PostEditForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostEditFormComponent />);
    expect(component).toBeTruthy();
  });
});
