import React from 'react';
import { shallow } from 'enzyme';
import { HomeBarComponent } from './HomeBar';

describe('Component HomeBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomeBarComponent />);
    expect(component).toBeTruthy();
  });
});
