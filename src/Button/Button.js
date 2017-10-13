import React from 'react';
import PropTypes from 'prop-types';

const Button = ( { label, onClick } ) => {
  return (
    <span className='button' onClick={onClick}>{label}</span>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
