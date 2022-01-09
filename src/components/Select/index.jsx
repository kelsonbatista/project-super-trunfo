import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      id,
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
          <select
            id={ id }
            data-testid={ dataTestid }
            className={ classElement }
            onChange={ onChange }
          >
            {options.map(({ text, value }) => (
              <option key={ value } value={ value }>{text}</option>))}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string,
  dataTestid: PropTypes.string,
  classLabel: PropTypes.string,
  classElement: PropTypes.string,
  classDiv: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
}.isRequired;

export default Select;
