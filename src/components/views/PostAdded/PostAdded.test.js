import React from 'react';
import { shallow } from 'enzyme';
import { PostAddedComponent } from './PostAdded';

describe('Component PostAdded', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostAddedComponent />);
    expect(component).toBeTruthy();
  });
});
