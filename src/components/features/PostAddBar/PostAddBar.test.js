import React from 'react';
import { shallow } from 'enzyme';
import { PostAddBarComponent } from './PostAddBar';

describe('Component PostAddBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostAddBarComponent />);
    expect(component).toBeTruthy();
  });
});
