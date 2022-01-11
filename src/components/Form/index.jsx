import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import TextArea from '../TextArea';
import Select from '../Select';
import Button from '../Button';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form__single">
        <Input
          id="name"
          type="text"
          name="cardName"
          dataTestid="name-input"
          classLabel="form-label"
          classElement="form-control"
          classDiv="col-lg-12"
          value={ cardName }
          label="Name"
          onChange={ onInputChange }
        />

        <TextArea
          id="description"
          name="cardDescription"
          dataTestid="description-input"
          classLabel="form-label"
          classElement="form-control"
          value={ cardDescription }
          label="Description"
          onChange={ onInputChange }
        />

        <Input
          id="attr1"
          type="number"
          name="cardAttr1"
          dataTestid="attr1-input"
          classLabel="form-label"
          classElement="form-control"
          value={ cardAttr1 }
          label="Price"
          onChange={ onInputChange }
        />

        <Input
          id="attr2"
          type="number"
          name="cardAttr2"
          dataTestid="attr2-input"
          classLabel="form-label"
          classElement="form-control"
          value={ cardAttr2 }
          label="Speed"
          onChange={ onInputChange }
        />

        <Input
          id="attr3"
          type="number"
          name="cardAttr3"
          dataTestid="attr3-input"
          classLabel="form-label"
          classElement="form-control"
          value={ cardAttr3 }
          label="Torch"
          onChange={ onInputChange }
        />

        <Input
          id="image"
          type="text"
          name="cardImage"
          dataTestid="image-input"
          classLabel="form-label"
          classElement="form-control"
          value={ cardImage }
          label="Image"
          onChange={ onInputChange }
        />

        <Select
          id="rarity"
          name="cardRare"
          dataTestid="rare-input"
          classLabel="form-label"
          classElement="form-select card__rare-select"
          value={ cardRare }
          label="Rarity"
          onChange={ onInputChange }
          options={ ['normal', 'raro', 'muito raro'] }
        />

        <Input
          id="supertrunfo"
          type="checkbox"
          name="cardTrunfo"
          dataTestid="trunfo-input"
          classLabel="form-check-label"
          classElement="form-check-input"
          checked={ cardTrunfo }
          label="Super Trunfo"
          onChange={ onInputChange }
        />

        <Button
          id="submit"
          type="submit"
          dataTestid="save-button"
          classElement="btn btn-primary"
          disabled={ isSaveButtonDisabled  }
          label="Salvar"
          onClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
