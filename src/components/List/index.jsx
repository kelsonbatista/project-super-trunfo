import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

class List extends Component {
  render() {
    const {
      cardName,
      cardList,
    } = this.props;

    const isList = true;

    return (
      <div className="list__group">
        {cardList.map((card) => (
          <Card
            key={ cardName }
            isList={ isList }
            cardTopic="Luxury Cars"
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardAttr1Label={ card.cardAttr1Label }
            cardAttr2Label={ card.cardAttr2Label }
            cardAttr3Label={ card.cardAttr3Label }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardRareLabel={ card.cardRareLabel }
            cardTrunfo={ card.cardTrunfo }
          />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  cardName: PropTypes.string,
  cardList: PropTypes.array,
}.isRequired;

export default List;
