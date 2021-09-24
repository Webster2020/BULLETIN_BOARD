import React from 'react';
import { shallow } from 'enzyme';
import { LoginButtonComponent } from './LoginButton';

describe('Component LoginButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<LoginButtonComponent />);
    expect(component).toBeTruthy();
  });
});
