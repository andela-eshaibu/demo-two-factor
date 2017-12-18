import React from 'react';
import classnames from 'classnames';
import PropTypes from 'react-proptypes';

/**
 * form field
 * @function FormField
 * @param {object} props
 * @return {XML} JSX
 */
const FormField = props => (
  <div className="form-group">
    <label className={'form-control-label'} htmlFor={ props.name }>{ props.label}</label>
      <input
        onChange={ props.onChange }
        type={ props.type ? props.type : 'text' }
        className={ classnames('form-control', { 'is-invalid': props.errors && props.errors[props.name] }) }
        name={ props.name }
        id={ props.name }
        value={ props.value }
      />
    { props.errors && props.errors[props.name] ?
      <div className="invalid-feedback">
        {props.errors[props.name]}
      </div> : false
    }
  </div>
);

FormField.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.object
};
export default FormField;
