import React from 'react';
import { shallow } from 'enzyme';
import { BackHomeButtonComponent } from './BackHomeButton';

describe('Component BackHomeButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<BackHomeButtonComponent />);
    expect(component).toBeTruthy();
  });
});
