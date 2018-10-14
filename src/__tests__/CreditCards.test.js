import React from 'react';
import { shallow } from 'enzyme';
import CreditCards from '../components/CreditCards';
import { CREDIT_CARDS } from '../constants';

describe('CreditCards component', () => {
  it('shows all cards as active', () => {
    const wrapper = shallow(<CreditCards ccActive={false} />);
    expect(wrapper.find('li').every('.disabled')).toBe(false);
  });

  it('shows one card as active', () => {
    const wrapper = shallow(<CreditCards ccActive />);
    expect(wrapper.find('li.disabled')).toHaveLength(CREDIT_CARDS.length - 1);
  });
});
