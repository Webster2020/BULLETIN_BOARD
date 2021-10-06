import React from 'react';
import { shallow } from 'enzyme';
import { PostDelBarComponent } from './PostDelBar';

describe('Component PostDelBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostDelBarComponent />);
    expect(component).toBeTruthy();
  });
});
