import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import { registerAction } from '../../actions/authActions';
import { alertClear } from '../../actions/alertActions';
import AuthComponent from '../AuthComponent';
/**
 * RegisterPage class declaration
 * @class RegisterPage
 * @extends {React.Component}
 */
export class RegisterPage extends Component {
  state = {
    alertState: {}
  };
  /**
   * Handle submit
   * @method handleSubmit
   * @param {object} userCredentials
   * @return {void} void
   */
  handleSubmit = (userCredentials) => {
    console.log(userCredentials, 'From Parent');
    console.log(this.props.alertState, 'From 222');
    this.props.registerAction(userCredentials);
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
        authType= 'register'
        authSubmit={ this.handleSubmit }
        onAlertClose={ this.onAlertClose }
      />
    );
  }
}

RegisterPage.propTypes = {
  registerState: PropTypes.object.isRequired,
  alertState: PropTypes.object.isRequired,
  registerAction: PropTypes.func.isRequired,
  alertClear: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  registerState: state.registerReducer,
  alertState: state.alertReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ registerAction, alertClear }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
