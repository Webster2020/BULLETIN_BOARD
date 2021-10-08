import React from 'react';
import { shallow } from 'enzyme';
import { PostAddedBarComponent } from './PostAddedBar';

describe('Component PostAddedBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostAddedBarComponent />);
    expect(component).toBeTruthy();
  });
});
