import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import { loginAction } from '../../actions/authActions';
import { alertClear } from '../../actions/alertActions';
import AuthComponent from '../AuthComponent';

/**
 * LoginPage class declaration
 * @class LoginPage
 * @extends {React.Component}
 */
export class LoginPage extends Component {
  /**
   * Handle submit
   * @method handleSubmit
   * @param {object} userCredentials
   * @return {void} void
   */
  handleSubmit = (userCredentials) => {
    console.log(userCredentials, 'From Parent');
    this.props.loginAction(userCredentials);
  };

  /**
   * on close of alert
   * @return {void} void
   */
  onAlertClose = () => {
    this.props.alertClear();
  };

  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    return (
      <AuthComponent
        alertState={ this.props.alertState }
        authType= 'login'
        authSubmit={ this.handleSubmit }
        onAlertClose={this.onAlertClose}
      />
    );
  }
}

LoginPage.propTypes = {
  loginState: PropTypes.object.isRequired,
  alertState: PropTypes.object.isRequired,
  loginAction: PropTypes.func.isRequired,
  alertClear: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loginState: state.loginReducer,
  alertState: state.alertReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginAction, alertClear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
