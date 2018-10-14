import React from 'react';
import sign from '../assets/atm_sign.png';
import graffiti from '../assets/graffiti.png';

const Sign = () => (
  <div className="sign-container">
    <img className="sign-atm" src={sign} alt="ATM 24 Hour Banking" />
    <img className="sign-graffiti" src={graffiti} alt="Graffiti" />
  </div>
);

export default Sign;
