import React from 'react';
import { shallow } from 'enzyme';
import { PostEditedBarComponent } from './PostEditedBar';

describe('Component PostEditedBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostEditedBarComponent />);
    expect(component).toBeTruthy();
  });
});
