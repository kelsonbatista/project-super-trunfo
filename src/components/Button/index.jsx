import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      id,
      type,
      name,
      dataTestid,
      classElement,
      classDiv,
      disabled,
      label,
      param,
      onClick,
    } = this.props;

    return (
      <div className={ classDiv }>
        <button
          id={ id }
          type={ type === 'submit' ? 'submit' : 'button' }
          name={ name }
          data-testid={ dataTestid }
          data-label={ label }
          className={ classElement }
          disabled={ disabled }
          onClick={ param ? (() => onClick(param)) : onClick }
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
  name: PropTypes.string,
  dataTestid: PropTypes.string,
  classElement: PropTypes.string,
  classDiv: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default Button;
