import React from 'react';
import { shallow } from 'enzyme';
import { RegisterButtonComponent } from './RegisterButton';

describe('Component RegisterButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<RegisterButtonComponent />);
    expect(component).toBeTruthy();
  });
});
