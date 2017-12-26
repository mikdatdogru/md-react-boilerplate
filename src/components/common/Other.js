import React from 'react';
import PropTypes from 'prop-types';

const Other = ({ name, squared }) => (
  <span
    className={`flag-icon flag-icon-${name === 'en' ? 'us' : name} ${squared &&
      'flag-icon-squared'}`}
  />
);

Other.propTypes = {
  name: PropTypes.string.isRequired,
  squared: PropTypes.bool,
};
Other.defaultProps = {
  squared: false,
};

export default Other;
