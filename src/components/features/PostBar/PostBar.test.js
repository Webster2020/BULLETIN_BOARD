import React from 'react';
import { shallow } from 'enzyme';
import { PostBarComponent } from './PostBar';

describe('Component PostBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostBarComponent />);
    expect(component).toBeTruthy();
  });
});
