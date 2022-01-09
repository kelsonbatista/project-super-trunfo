import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card__single">

        <p className="card__name" data-testid="name-card">
          {cardName}
        </p>

        <img
          className="card__name"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />

        <p className="card__description" data-testid="description-card">
          {cardDescription}
        </p>

        <p className="card__attr1" data-testid="attr1-card">
          {cardAttr1}
        </p>

        <p className="card__attr2" data-testid="attr2-card">
          {cardAttr2}
        </p>

        <p className="card__attr3" data-testid="attr3-card">
          {cardAttr3}
        </p>

        <p className="card__rare" data-testid="rare-card">
          {cardRare}
        </p>
        {
          cardTrunfo
            ? <p className="card__rare" data-testid="trunfo-card">Super Trunfo</p>
            : ''
        }

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.bool,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
