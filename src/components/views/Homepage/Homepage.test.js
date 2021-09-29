import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';
import { MemoryRouter } from 'react-router-dom';

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><HomepageComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
