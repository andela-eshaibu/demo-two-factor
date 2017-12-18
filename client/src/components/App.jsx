import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import { alertClear } from '../actions/alertActions';
import { logoutAction } from '../actions/authActions';
import Header from '../components/Header';
import { HomePage, LoginPage, RegisterPage, SetUpTwoFactorPage, DisableTwoFactorPage } from './Page';
import history from '../utils/history';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';

/**
 * App class declaration
 * @class App
 * @extends {React.Component}
 */
class App extends Component {
  /**
   * Component constructor
   * @param {object} props
   * @memberOf App
   */
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`);
      // console.log(`The last navigation action was ${action}`);
      this.props.alertClear();
    });
  }

  /**
   * on click of logout link
   * @return {void} void
   */
  handleLogout = () => {
    this.props.logoutAction();
  };

  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Header
              handleLogout={this.handleLogout}
            />
            <Switch>
              <Route exact path='/' component={HomePage}/>
                <PublicRoute path='/login' component={LoginPage}/>
                <PublicRoute path='/register' component={RegisterPage}/>
                <PrivateRoute path='/two-factor-setup' component={SetUpTwoFactorPage}/>
                <PrivateRoute path='/two-factor-disable' component={DisableTwoFactorPage}/>
                <Route path="*" component={HomePage}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  alertClear: PropTypes.func.isRequired,
  logoutAction: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ alertClear, logoutAction }, dispatch);

export default connect(null, mapDispatchToProps)(App);
