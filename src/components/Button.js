import React from 'react';
import PropTypes from 'prop-types';
import { ORIENTATION } from '../constants';

export const Dash = () => <span>–</span>;

const Button = ({ orientation, label, onClick }) => (
  <div className="button-container">
    { orientation === ORIENTATION.RIGHT && <Dash /> }
    <button className="button" onClick={() => {
      onClick(label);
    }} />
    { orientation === ORIENTATION.LEFT && <Dash /> }
  </div>
);

export default Button;

Button.propTypes = {
  orientation: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};
