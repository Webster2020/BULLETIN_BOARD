import React from 'react';
import { shallow } from 'enzyme';
import { MyPostsButtonComponent } from './MyPostsButton';

describe('Component MyPostsButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<MyPostsButtonComponent />);
    expect(component).toBeTruthy();
  });
});
