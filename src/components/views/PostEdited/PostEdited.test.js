import React from 'react';
import { shallow } from 'enzyme';
import { PostEditedComponent } from './PostEdited';

describe('Component PostEdited', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostEditedComponent />);
    expect(component).toBeTruthy();
  });
});
