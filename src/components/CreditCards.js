import React from 'react';
import PropTypes from 'prop-types';
import { CREDIT_CARDS } from '../constants';
import { getRandomInt } from '../utils';

const CreditCards = ({ ccActive }) => {
  const activeIndex = getRandomInt(0, CREDIT_CARDS.length - 1);

  return (
    <ul className="card-container">
      { CREDIT_CARDS.map((card, index) => {
        const activeClass = ccActive && index !== activeIndex ? 'disabled' : '';

        return (
          <li key={card} id={card} className={activeClass} />
        );
      }) }
    </ul>
  );
};

export default CreditCards;

CreditCards.propTypes = {
  ccActive: PropTypes.bool
};
