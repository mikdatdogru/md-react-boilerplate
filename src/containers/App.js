import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';

import MainLayout from './Layouts/MainLayout';
import translations from '../translations';

const App = ({ lang }) => (
  <div data-test="appComponent" className="appComponent">
    <IntlProvider locale={lang} messages={translations[lang]}>
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
  </div>
);

App.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  lang: state.locale.lang,
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
