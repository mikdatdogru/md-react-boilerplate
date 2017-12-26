import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import tr from 'react-intl/locale-data/tr';
import en from 'react-intl/locale-data/en';

import MainLayout from './Layouts/MainLayout';
import localeData from '../utils/localeStrings';

addLocaleData([...tr, ...en]);

const App = ({ lang }) => (
  <IntlProvider locale={lang} messages={localeData[lang]}>
    <Switch>
      <Route path="/" component={MainLayout} />
    </Switch>
  </IntlProvider>
);

App.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  lang: state.locale.lang,
});
const mapDispatchToProps = {};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
