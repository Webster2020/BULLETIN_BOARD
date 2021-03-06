import React from 'react';
import { shallow } from 'enzyme';
import { PostsListComponent } from './PostsList';
import { MemoryRouter } from 'react-router-dom';

describe('Component PostsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><PostsListComponent/></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
