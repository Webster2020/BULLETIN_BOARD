import React from 'react';
import { shallow } from 'enzyme';
import { SinglePostComponent } from './SinglePost';

describe('Component SinglePost', () => {
  it('should render without crashing', () => {
    const component = shallow(<SinglePostComponent />);
    expect(component).toBeTruthy();
  });
});
