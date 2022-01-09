import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      id,
      type,
      dataTestid,
      classElement,
      disabled,
      label,
      onClick,
    } = this.props;

    return (
      <div>
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
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
