import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
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
    } = this.props;

    return (
      <div className={ classDiv }>
        <label htmlFor={ id } className={ classLabel }>
          {label}
          :
          <textarea
            id={ id }
            name={ name }
            data-testid={ dataTestid }
            data-label={ label }
            className={ classElement }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  dataTestid: PropTypes.string,
  classLabel: PropTypes.string,
  classElement: PropTypes.string,
  classDiv: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextArea;
