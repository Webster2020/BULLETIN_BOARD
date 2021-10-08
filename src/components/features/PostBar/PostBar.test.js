import React from 'react';
import { shallow } from 'enzyme';
import { PostBarComponent } from './PostBar';
import { MemoryRouter } from 'react-router-dom';

describe('Component PostBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><PostBarComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
