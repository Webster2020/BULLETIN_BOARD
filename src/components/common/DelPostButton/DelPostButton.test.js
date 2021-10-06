import React from 'react';
import { shallow } from 'enzyme';
import { DelPostButtonComponent } from './DelPostButton';

describe('Component DelPostButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<DelPostButtonComponent />);
    expect(component).toBeTruthy();
  });
});
