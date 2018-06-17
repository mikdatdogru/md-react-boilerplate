import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navbar } from 'reactstrap';
import { Dropdown } from 'semantic-ui-react';
import { Flag } from '../../components/common';
import { store } from '../../index';
import { setLocale } from '../../actions/common';

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  languageChanger(lang) {
    store.dispatch(setLocale(lang));
  }

  render() {
    const { lang } = this.props;
    return (
      <Navbar dark expand="sm" color="faded">
        <div className="ml-auto">
          <Dropdown pointing trigger={<Flag name={lang} />}>
            <Dropdown.Menu>
              <Dropdown.Item selected={lang === 'tr'} onClick={() => this.languageChanger('tr')}>
                <Flag name="tr" />
              </Dropdown.Item>
              <Dropdown.Item selected={lang === 'en'} onClick={() => this.languageChanger('en')}>
                <Flag name="us" />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    );
  }
}

TopNavigation.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  lang: state.locale.lang,
});
const mapDispatchToProps = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavigation);
