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
      defaultValue,
      value,
      label,
      onChange,
      disabled,
      isFilter,
      options,
    } = this.props;

    return (
      <div className={ classDiv }>
        <label htmlFor={ id } className={ classLabel }>
          {`${label}: `}
          <select
            id={ id }
            name={ name }
            data-testid={ dataTestid }
            data-label={ label }
            data-filter={ isFilter }
            className={ classElement }
            defaultValue={ defaultValue }
            value={ value }
            disabled={ disabled }
            onChange={ onChange }
          >
            {(isFilter ? <option key="1000" value="">todas</option> : null)}
            {options.map(({ optionText, optionValue }, index) => (
              <option key={ index } value={ optionValue }>{optionText}</option>))}
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
