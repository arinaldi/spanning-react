import React from 'react';
import { shallow } from 'enzyme';
import Button, { Dash } from '../components/Button';
import { ORIENTATION, BUTTONS } from '../constants';

describe('Button component', () => {
  const fn = jest.fn();
  const wrapper = shallow(<Button
    orientation={ORIENTATION.LEFT}
    label={BUTTONS.DEPOSIT}
    onClick={fn}
  />);

  it('renders a dash', () => {
    expect(wrapper.find(Dash)).toHaveLength(1);
  });

  it('fires the click handler', () => {
    wrapper.find('button').props().onClick();
    expect(fn.mock.calls.length).toEqual(1);
  });
});
