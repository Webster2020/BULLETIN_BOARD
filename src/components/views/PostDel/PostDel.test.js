import React from 'react';
import { shallow } from 'enzyme';
import { PostDelComponent } from './PostDel';

describe('Component PostDel', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostDelComponent />);
    expect(component).toBeTruthy();
  });
});
