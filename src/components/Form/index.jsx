import React, { Component } from 'react';
import Input from '../Input';
import TextArea from '../TextArea';
import Select from '../Select';
import Button from '../Button';
// import PropTypes from 'prop-types'

export default class Form extends Component {
  render() {
    return (
      <div>
        <h1>Add new card</h1>
        <Input
          id="name"
          type="text"
          dataTestid="name-input"
          classLabel="form-label"
          classElement="form-control"
          label="Name:"
          onChange={ () => {} }
        />

        <TextArea
          id="description"
          dataTestid="description-input"
          classLabel="form-label"
          classElement="form-control"
          label="Description:"
          onChange={ () => {} }
        />

        <Input
          id="attr1"
          type="number"
          dataTestid="attr1-input"
          classLabel="form-label"
          classElement="form-control"
          label="Attribute1:"
          onChange={ () => {} }
        />

        <Input
          id="attr2"
          type="number"
          dataTestid="attr2-input"
          classLabel="form-label"
          classElement="form-control"
          label="Attribute2:"
          onChange={ () => {} }
        />

        <Input
          id="attr3"
          type="number"
          dataTestid="attr3-input"
          classLabel="form-label"
          classElement="form-control"
          label="Attribute3:"
          onChange={ () => {} }
        />

        <Input
          id="image"
          type="text"
          dataTestid="image-input"
          classLabel="form-label"
          classElement="form-control"
          label="Image:"
          onChange={ () => {} }
        />

        <Select
          id="rarity"
          dataTestid="rare-input"
          classLabel="form-label"
          classElement="form-control"
          label="Rarity:"
          onChange={ () => {} }
          options={ [
            { text: 'Normal', value: 'normal' },
            { text: 'Raro', value: 'raro' },
            { text: 'Muito raro', value: 'muito raro' },
          ] }
        />

        <Input
          id="supertrunfo"
          type="checkbox"
          dataTestid="trunfo-input"
          classLabel="form-check-label"
          classElement="form-check-input"
          label="Super Trunfo:"
          onChange={ () => {} }
        />

        <Button
          id="submit"
          type="submit"
          dataTestid="save-button"
          classElement="btn btn-primary"
          label="Salvar"
          onClick={ () => {} }
        />

      </div>
    );
  }
}
