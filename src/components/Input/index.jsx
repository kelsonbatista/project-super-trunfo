import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      id,
      type,
      dataTestid,
      classLabel,
      classElement,
      label,
      onChange,
    } = this.props;

    return (
      <div>
        <label htmlFor={ id } className={ classLabel }>
          {label}
          <input
            id={ id }
            type={ type }
            data-testid={ dataTestid }
            className={ classElement }
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
  dataTestid: PropTypes.string,
  classLabel: PropTypes.string,
  classElement: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
