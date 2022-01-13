import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      isList,
      avatar,
      cardTopic,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardAttr1Label,
      cardAttr2Label,
      cardAttr3Label,
      cardImage,
      cardRare,
      cardRareLabel,
      cardTrunfo,
      hasTrunfo,
    } = this.props;

    function handleTrunfoImg() {
      if (cardTrunfo) {
        return (
          <div
            className="card__super"
            data-testid="trunfo-card"
            data-trunfo={ hasTrunfo }
          >
            Super Trunfo
          </div>
        );
      }
      return '';
    }

    return (
      <div
        className={ isList ? 'card__single-list' : 'card__single' }
        key={ cardName }
      >

        <div className="card__bg" />
        <div className="card__topic">
          <span>{cardTopic}</span>
        </div>
        <div className="card__name" data-testid="name-card">
          {cardName}
        </div>
        <div className="card__image">
          <img
            data-testid="image-card"
            src={ cardImage || avatar }
            alt={ cardName }
          />
        </div>

        <div className="card__description" data-testid="description-card">
          <span>{cardDescription}</span>
        </div>

        <div className="card__attr1-label card__attr" ref={ this.attr1 }>
          <span>{ cardAttr1Label }</span>
        </div>

        <div className="card__attr1 card__attr" data-testid="attr1-card">
          <span>{cardAttr1}</span>
        </div>

        <div className="card__attr2-label card__attr">
          <span>{ cardAttr2Label }</span>
        </div>

        <div className="card__attr2 card__attr" data-testid="attr2-card">
          <span>{cardAttr2}</span>
        </div>

        <div className="card__attr3-label card__attr">
          <span>{cardAttr3Label}</span>
        </div>

        <div className="card__attr3 card__attr" data-testid="attr3-card">
          <span>{cardAttr3}</span>
        </div>

        <div className="card__rare" data-testid="rare-card">
          <span>
            { cardRare ? `${cardRareLabel}: ${cardRare}` : '' }
          </span>
        </div>
        {/* {
          cardTrunfo
            ? <div className="card__super" data-testid="trunfo-card" data-trunfo={ hasTrunfo }>Super Trunfo</div>
            : ''
        } */}
        {handleTrunfoImg()}
      </div>
    );
  }
}

Card.propTypes = {
  avatar: PropTypes.string,
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardAttr1Label: PropTypes.string,
  cardAttr2Label: PropTypes.string,
  cardAttr3Label: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.bool,
  cardRareLabel: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
