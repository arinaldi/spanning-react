import React from 'react';
import PropTypes from 'prop-types';
import { BUTTONS } from '../constants';

const Screen = ({ status }) => (
  <div className="screen">
    <p>{status}</p>
    <div className="options">
      <div className="options-left">
        <p>{BUTTONS.WITHDRAW}</p>
        <p>{BUTTONS.DEPOSIT}</p>
      </div>
      <div className="options-right">
        <p>{BUTTONS.BALANCE}</p>
        <p>{BUTTONS.PIN}</p>
      </div>
    </div>
  </div>
);

export default Screen;

Screen.propTypes = {
  status: PropTypes.string
};
