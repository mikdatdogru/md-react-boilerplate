import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import tr from 'react-intl/locale-data/tr';
import en from 'react-intl/locale-data/en';
import { ToastContainer } from 'react-toastify';

import MainLayout from './Layouts/MainLayout';
import localeData from '../utils/localeStrings';

addLocaleData([...tr, ...en]);

const App = ({ lang }) => (
  <IntlProvider locale={lang} messages={localeData[lang]}>
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Switch>
        <Route path="/" component={MainLayout} />
      </Switch>
    </div>
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
