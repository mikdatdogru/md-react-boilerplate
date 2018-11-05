import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import TopNavigation from './TopNavigation';

import { store } from '../../index';
import { setLocale } from '../../redux/modules/locale';

import HomePage from '../../pages/Home';
import { detectLang } from '../../utils/helper';

class MainLayout extends Component {
  constructor(props) {
    super(props);

    const lang = detectLang();

    store.dispatch(setLocale(lang));
  }

  render() {
    return (
      <Container>
        <TopNavigation />
        <Switch>
          <Route exact path="/" name="Home Page" component={HomePage} />

        </Switch>
      </Container>
    );
  }
}

export default MainLayout;
