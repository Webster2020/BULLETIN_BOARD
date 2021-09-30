import React from 'react';
import { shallow } from 'enzyme';
import { NotFoundBarComponent } from './NotFoundBar';

describe('Component NotFoundBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<NotFoundBarComponent />);
    expect(component).toBeTruthy();
  });
});
