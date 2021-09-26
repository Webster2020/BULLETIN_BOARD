import React from 'react';
import { shallow } from 'enzyme';
import { SaveEditedPostButtonComponent } from './SaveEditedPostButton';

describe('Component SaveEditedPostButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<SaveEditedPostButtonComponent />);
    expect(component).toBeTruthy();
  });
});
