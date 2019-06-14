import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Flag } from '../../components/common';
import { setLocale } from '../../redux/modules/locale';

class TopNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  languageChanger = (lang) => {
    this.props.setLocale(lang);
  };

  render() {
    const { lang } = this.props;
    return (
      <Navbar dark expand="sm" color="faded">
        <div className="ml-auto">
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              <Flag name={lang} />
            </DropdownToggle>
            <DropdownMenu style={{ width: '10px' }}>
              <DropdownItem active={lang === 'tr'} onClick={() => this.languageChanger('tr')}>
                <Flag name="tr" />
                {' '}
Türkçe
              </DropdownItem>
              <DropdownItem active={lang === 'en'} onClick={() => this.languageChanger('en')}>
                <Flag name="us" />
                {' '}
English
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </Navbar>
    );
  }
}

TopNavigation.propTypes = {
  lang: PropTypes.string.isRequired,
  setLocale: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lang: state.locale.lang,
});
const mapDispatchToProps = {
  setLocale,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavigation);
