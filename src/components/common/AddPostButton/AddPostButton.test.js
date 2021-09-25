import React from 'react';
import { shallow } from 'enzyme';
import { AddPostButtonComponent } from './AddPostButton';

describe('Component AddPostButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<AddPostButtonComponent />);
    expect(component).toBeTruthy();
  });
});
