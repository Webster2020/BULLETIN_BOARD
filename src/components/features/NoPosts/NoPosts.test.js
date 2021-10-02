import React from 'react';
import { shallow } from 'enzyme';
import { NoPostsComponent } from './NoPosts';

describe('Component NoPosts', () => {
  it('should render without crashing', () => {
    const component = shallow(<NoPostsComponent />);
    expect(component).toBeTruthy();
  });
});
