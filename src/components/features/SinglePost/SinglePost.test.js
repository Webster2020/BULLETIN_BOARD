import React from 'react';
import { shallow } from 'enzyme';
import { SinglePostComponent } from './SinglePost';
import { MemoryRouter } from 'react-router-dom';

describe('Component SinglePost', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><SinglePostComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
