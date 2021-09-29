import React from 'react';
import { shallow } from 'enzyme';
import { SaveAddedPostButtonComponent } from './SaveAddedPostButton';

describe('Component SaveAddedPostButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<SaveAddedPostButtonComponent />);
    expect(component).toBeTruthy();
  });
});
