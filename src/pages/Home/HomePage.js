import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { sampleAction } from '../../actions/common';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.sampleAction();

    swal({
      title: 'Alert',
      animation: false,
      customClass: 'animated fadeIn',
    });

    toast.info('Wow so easy!');
  }

  render() {
    return (
      <div>
        <FormattedMessage id="general.homepage" defaultMessage="Anasayfa" />
      </div>
    );
  }
}

HomePage.propTypes = {
  sampleAction: PropTypes.func.isRequired,
};
HomePage.defaultProps = {};

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  sampleAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
