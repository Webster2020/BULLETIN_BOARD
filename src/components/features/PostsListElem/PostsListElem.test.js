import React from 'react';
import { shallow } from 'enzyme';
import { PostsListElemComponent } from './PostsListElem';
import { MemoryRouter } from 'react-router-dom';

describe('Component PostsListElem', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><PostsListElemComponent/></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
