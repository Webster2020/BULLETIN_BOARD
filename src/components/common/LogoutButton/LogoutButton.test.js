import React from 'react';
import { shallow } from 'enzyme';
import { LogoutButtonComponent } from './LogoutButton';

describe('Component LogoutButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<LogoutButtonComponent />);
    expect(component).toBeTruthy();
  });
});
