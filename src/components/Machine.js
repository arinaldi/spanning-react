import React from 'react';
import PropTypes from 'prop-types';
import { BUTTONS, ORIENTATION } from '../constants';
import sticker from '../assets/sticker_graf.png';
import CreditCards from './CreditCards';
import ButtonStack from './ButtonStack';
import Screen from './Screen';
import Spanning from './Spanning';

const Machine = ({ status, ccActive, handleClick }) => (
  <div className="machine">
    <img className="sticker" src={sticker} alt="Sticker" />
    <CreditCards ccActive={ccActive} />
    <div className="interface">
      <ButtonStack
        orientation={ORIENTATION.LEFT}
        labels={['', '', BUTTONS.WITHDRAW, BUTTONS.DEPOSIT]}
        handleClick={handleClick}
      />
      <div className="screen-container">
        <Screen status={status} />
        <Spanning />
      </div>
      <ButtonStack
        orientation={ORIENTATION.RIGHT}
        labels={['', '', BUTTONS.BALANCE, BUTTONS.PIN]}
        handleClick={handleClick}
      />
    </div>
  </div>
);

export default Machine;

Machine.propTypes = {
  status: PropTypes.string,
  ccActive: PropTypes.bool,
  handleClick: PropTypes.func
};
