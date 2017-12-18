import React from 'react';
import PropTypes from 'react-proptypes';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    window.sessionStorage.getItem('token')
      ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      : <Component {...props} />
  )} />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
};

export default PrivateRoute;
