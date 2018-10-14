import React from 'react';
import { shallow } from 'enzyme';
import Spanning from '../components/Spanning';

describe('Spanning component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Spanning />);
    expect(wrapper.find('div').props().className).toBe('spanning');
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('img').props().alt).toBe('Spanning Systems');
  });
});
