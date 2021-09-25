import React from 'react';
import { shallow } from 'enzyme';
import { PostsListElemComponent } from './PostsListElem';

describe('Component PostsListElem', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostsListElemComponent />);
    expect(component).toBeTruthy();
  });
});
