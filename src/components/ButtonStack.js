import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonStack = ({ orientation, labels, handleClick }) => (
  <div className="button-stack">
    { labels.map((label, index) => (
      <Button
        key={index}
        orientation={orientation}
        label={label}
        onClick={handleClick}
      />
    )) }
  </div>
);

export default ButtonStack;

ButtonStack.propTypes = {
  orientation: PropTypes.string,
  labels: PropTypes.array,
  handleClick: PropTypes.func
};
