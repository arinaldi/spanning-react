import React from 'react';
import { shallow } from 'enzyme';
import Machine from '../components/Machine';
import CreditCards from '../components/CreditCards';
import ButtonStack from '../components/ButtonStack';
import Screen from '../components/Screen';
import Spanning from '../components/Spanning';
import { STATUS } from '../constants';

describe('Machine component', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Machine
    status={STATUS.MAKE_CHOICE}
    ccActive={false}
    handleClick={fn}
  />);

  it('renders the child components correctly', () => {
    expect(wrapper.find(CreditCards)).toHaveLength(1);
    expect(wrapper.find(ButtonStack)).toHaveLength(2);
    expect(wrapper.find(Screen)).toHaveLength(1);
    expect(wrapper.find(Spanning)).toHaveLength(1);
  });
});
