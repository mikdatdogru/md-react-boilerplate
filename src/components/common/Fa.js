import React from 'react';
import PropTypes from 'prop-types';

const Fa = ({
  type, icon, size, isSpin, className,
}) => (
  <i className={`${type} fa-${icon} fa-${size} ${isSpin ? 'fa-spin' : ''} ${className}`} />
);

Fa.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  isSpin: PropTypes.bool,
  className: PropTypes.string,
};
Fa.defaultProps = {
  type: 'fas',
  size: 'sm',
  isSpin: false,
  className: '',
};

export default Fa;
