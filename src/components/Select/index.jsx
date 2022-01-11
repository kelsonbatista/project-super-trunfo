import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      id,
      name,
      dataTestid,
      classLabel,
      classElement,
      classDiv,
      value,
      label,
      onChange,
      options,
    } = this.props;

    return (
      <div className={ classDiv }>
        <label htmlFor={ id } className={ classLabel }>
          {label}
          :
          <select
            id={ id }
            name={ name }
            data-testid={ dataTestid }
            data-label={ label }
            className={ classElement }
            value={ value }
            onChange={ onChange }
          >
            {options.map((text, index) => (
              <option key={ index } value={ text }>{text}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dataTestid: PropTypes.string,
  classLabel: PropTypes.string,
  classElement: PropTypes.string,
  classDiv: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
}.isRequired;

export default Select;
