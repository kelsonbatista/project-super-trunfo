import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const {
      id,
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
          <textarea
            id={ id }
            data-testid={ dataTestid }
            className={ classElement }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string,
  dataTestid: PropTypes.string,
  classLabel: PropTypes.string,
  classElement: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default TextArea;
