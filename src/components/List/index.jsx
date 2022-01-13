import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Button from '../Button';

class List extends Component {
  render() {
    const {
      cardList,
      cardListFilter,
      onDeleteButtonClick,
      isFilterNotFound,
    } = this.props;

    const isList = true;

    if (isFilterNotFound) {
      return '';
    }

    return (
      <div className="list__group">
        {(cardListFilter.length !== 0 ? cardListFilter : cardList)
          .map((card, index) => (
            <div key={ index }>
              <Card
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

              <Button
                id="button"
                type="button"
                dataTestid="delete-button"
                classElement="btn btn-primary"
                classDiv={ isList ? 'card__btn-delete-div' : 'card__btn-none' }
                disabled={ false }
                label="Excluir"
                param={ card }
                onClick={ onDeleteButtonClick }
              />
            </div>
          ))}
      </div>
    );
  }
}

List.propTypes = {
  cardList: PropTypes.array,
  cardListFilter: PropTypes.array,
  onDeleteButtonClick: PropTypes.func,
  isFilterNotFound: PropTypes.bool,
}.isRequired;

export default List;
