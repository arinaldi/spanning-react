import React from 'react';
import { shallow } from 'enzyme';
import Screen from '../components/Screen';
import { STATUS } from '../constants';

describe('Screen component', () => {
  it('shows the status', () => {
    const wrapper = shallow(<Screen status={STATUS.MAKE_CHOICE} />);
    expect(wrapper.find('p').at(0).text()).toEqual(STATUS.MAKE_CHOICE);
  });
});
