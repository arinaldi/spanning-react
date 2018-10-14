import React from 'react';
import { shallow } from 'enzyme';
import Sign from '../components/Sign';

describe('Sign component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Sign />);
    expect(wrapper.find('img')).toHaveLength(2);
    expect(wrapper.find('img').at(0).props().alt).toBe('ATM 24 Hour Banking');
    expect(wrapper.find('img').at(1).props().alt).toBe('Graffiti');
  });
});
