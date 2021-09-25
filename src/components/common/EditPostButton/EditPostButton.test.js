import React from 'react';
import { shallow } from 'enzyme';
import { EditPostButtonComponent } from './EditPostButton';

describe('Component EditPostButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<EditPostButtonComponent />);
    expect(component).toBeTruthy();
  });
});
