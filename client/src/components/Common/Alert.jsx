import React from 'react';
import classnames from 'classnames';
import PropTypes from 'react-proptypes';

/**
 * Alert component
 * @param {object} props
 * @return {XML} JSX
 */
const Alert = props => (
  <div className={ classnames('alert alert-dismissible', props.alertType) } role="alert">
    { props.message }
    <button type="button" className="close" aria-label="Close">
      <span aria-hidden="true"
            onClick={() => props.onAlertClose()}>x</span>
    </button>
  </div>
);
Alert.propTypes = {
  alertType: PropTypes.string,
  message: PropTypes.string,
  onAlertClose: PropTypes.func
};
export default Alert;
