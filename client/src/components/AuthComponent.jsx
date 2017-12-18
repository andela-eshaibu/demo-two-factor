import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'react-proptypes';
import FormField from './Common/FormField';
import Alert from './Common/Alert';
/**
 * AuthComponent class declaration
 * @extends {React.Component}
 */
class AuthComponent extends Component {
  state = {
    loginDetails: {
      username: '',
      password: ''
    }
  };

  /**
   * Handle submit
   * @method handleSubmit
   * @param {object} event - event
   * @return {void} void
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.authSubmit(this.state.credentials);
  };

  /**
   * Handle change
   * @method handleChange
   * @param {event} event - event
   * @return {void} void
   */
  handleChange = (event) => {
    const credentials = this.state.loginDetails;
    credentials[event.target.name] = event.target.value;
    this.setState({ credentials });
  };

  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    return (
      <div className="offset-sm-2 col-sm-8 offset-lg-3 col-lg-6">
        <h1 className="text-center mb-5">
          { (this.props.authType === 'login') ? 'LOGIN' : 'REGISTER' }
        </h1>
        <form onSubmit={ this.handleSubmit } >
          { this.props.alertState.message ?
            <Alert
              alertType={this.props.alertState.type}
              message={this.props.alertState.message}
              onAlertClose={this.props.onAlertClose}
            /> : null
          }
          <FormField errors={this.props.authErrors}
                     onChange={ this.handleChange }
                     value={this.state.loginDetails.username}
                     name="username"
                     label='Username'
          />
          <FormField type="password"
                     errors={this.props.authErrors}
                     onChange={ this.handleChange }
                     value={this.state.loginDetails.password}
                     name="password"
                     label="Password"
          />
          <div className="form-group lead">
            <div className="offset-sm-3 col-sm-6">
              <button type="submit" className="btn btn-lg btn-primary btn-block">
                { (this.props.authType === 'login') ? 'LOGIN' : 'REGISTER' }
              </button>
            </div>
          </div>
          <div className="form-group">
            <div className="offset-sm-3 col-sm-6">
              {
                (this.props.authType === 'login') ?
                  <span className="pull-left">
                    No Account yet ?
                    <Link className="text-underline text-signin" to="/register">
                      <strong> Register</strong>
                    </Link>
                  </span> :
                  <span className="pull-left">
                    Already registered ?
                    <Link className="text-underline text-signin" to="/login">
                      <strong> Login</strong>
                    </Link>
                  </span>
              }
            </div>
          </div>
        </form>
      </div>
    );
  }
}
AuthComponent.propTypes = {
  authErrors: PropTypes.object,
  alertState: PropTypes.object.isRequired,
  authType: PropTypes.string.isRequired,
  authSubmit: PropTypes.func.isRequired,
  onAlertClose: PropTypes.func.isRequired
};

export default AuthComponent;
