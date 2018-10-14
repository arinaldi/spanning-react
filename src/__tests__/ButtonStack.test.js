import React from 'react';
import { shallow } from 'enzyme';
import ButtonStack from '../components/ButtonStack';
import Button from '../components/Button';
import { ORIENTATION, BUTTONS } from '../constants';

const LABELS = ['', '', BUTTONS.BALANCE, BUTTONS.PIN];

describe('ButtonStack component', () => {
  const fn = jest.fn();
  const wrapper = shallow(<ButtonStack
    orientation={ORIENTATION.LEFT}
    labels={LABELS}
    handleClick={fn}
  />);

  it('renders the correct amount of buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(LABELS.length);
  });
});
