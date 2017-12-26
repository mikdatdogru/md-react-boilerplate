import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormB from './sub/FormB';
import FormC from './sub/FormC';
import Information from './sub/Information';
import CompanyProfile from './sub/CompanyProfile';

class Forms extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <CompanyProfile />

        <Switch>
          <Route path={`${match.path}/b`} component={FormB} />
          <Route path={`${match.path}/c`} component={FormC} />
          <Route
            path={`${match.path}/bc`}
            name="Test Page"
            render={() => [<FormB key={1} />, <FormC key={2} />]}
          />
          <Redirect from={`${match.path}/`} to="/" />
        </Switch>
        <Information />
      </div>
    );
  }
}

Forms.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
Forms.defaultProps = {};

export default Forms;
