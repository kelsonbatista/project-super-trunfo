import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      id,
      type,
      name,
      dataTestid,
      classLabel,
      classElement,
      classDiv,
      value,
      checked,
      label,
      onChange,
    } = this.props;

    return (
      <div className={ classDiv }>
        <label htmlFor={ id } className={ classLabel }>
          {label}
          :
          <input
            id={ id }
            type={ type }
            name={ name }
            data-testid={ dataTestid }
            data-label={ label }
            className={ classElement }
            value={ value }
            checked={ checked }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  dataTestid: PropTypes.string,
  classLabel: PropTypes.string,
  classElement: PropTypes.string,
  classDiv: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
