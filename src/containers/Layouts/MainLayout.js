import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import TopNavigation from '../Layouts/TopNavigation';

import { store } from '../../index';
import { setLocale } from '../../actions/common';

import HomePage from '../../pages/Home';
import { localStorageData } from '../../utils/helper';

class MainLayout extends Component {

  componentWillMount() {

    const language =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

    const lang = localStorageData.get('language');
    if (lang) {
      store.dispatch(setLocale(lang.data));
    } else {
      store.dispatch(setLocale(languageWithoutRegionCode));
    }
  }

  render() {
    return (
      <Container>
        <TopNavigation />
        <Switch>
          <Route path="/homepage" name="Home Page" component={HomePage} />
          <Redirect from="/" to="/homepage" />
        </Switch>
      </Container>
    );
  }
}

export default MainLayout;
