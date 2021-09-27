import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';
import { MemoryRouter } from 'react-router-dom';

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><PostComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
