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
      label,
      disabled,
      onChange,
    } = this.props;

    return (
      <div className={ classDiv }>
        <label htmlFor={ id } className={ classLabel }>
          {`${label}: `}
        </label>
        <input
          id={ id }
          type={ type }
          name={ name }
          data-testid={ dataTestid }
          data-label={ label }
          className={ classElement }
          value={ value }
          disabled={ disabled }
          onChange={ onChange }
        />
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
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
