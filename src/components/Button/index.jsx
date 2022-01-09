import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      id,
      type,
      dataTestid,
      classElement,
      classDiv,
      disabled,
      label,
      onClick,
    } = this.props;

    return (
      <div className={ classDiv }>
        <button
          id={ id }
          type={ type === 'submit' ? 'submit' : 'reset' }
          data-testid={ dataTestid }
          className={ classElement }
          disabled={ disabled }
          onClick={ onClick }
        >
          {label}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  dataTestid: PropTypes.string,
  classElement: PropTypes.string,
  classDiv: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
