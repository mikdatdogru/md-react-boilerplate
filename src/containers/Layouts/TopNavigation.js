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
import { LangFlag } from '../../components/common';
import { setLocale } from '../../redux/modules/locale';

export class TopNavigationComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  languageChanger = lang => {
    this.props.setLocale(lang);
  };

  render() {
    const { lang } = this.props;
    return (
      <Navbar data-test="TopNavigation" dark expand="sm" color="faded">
        <div className="ml-auto">
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              <LangFlag name={lang} />
            </DropdownToggle>
            <DropdownMenu style={{ width: '10px' }}>
              <DropdownItem active={lang === 'tr'} onClick={() => this.languageChanger('tr')}>
                <LangFlag name="tr" /> Türkçe
              </DropdownItem>
              <DropdownItem active={lang === 'en'} onClick={() => this.languageChanger('en')}>
                <LangFlag name="us" /> English
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </Navbar>
    );
  }
}

TopNavigationComp.propTypes = {
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
)(TopNavigationComp);
