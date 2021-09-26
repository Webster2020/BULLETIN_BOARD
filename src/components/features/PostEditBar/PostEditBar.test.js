import React from 'react';
import { shallow } from 'enzyme';
import { PostEditBarComponent } from './PostEditBar';

describe('Component PostEditBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostEditBarComponent />);
    expect(component).toBeTruthy();
  });
});
