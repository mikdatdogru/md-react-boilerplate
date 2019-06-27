import React from 'react';
import PropTypes from 'prop-types';

const LangFlag = ({ name, squared }) => (
  <span
    data-test="flagComponent"
    className={`flag-icon flag-icon-${name === 'en' ? 'us' : name} ${squared &&
      'flag-icon-squared'}`}
  />
);

LangFlag.propTypes = {
  name: PropTypes.string.isRequired,
  squared: PropTypes.bool,
};
LangFlag.defaultProps = {
  squared: false,
};

export default LangFlag;
