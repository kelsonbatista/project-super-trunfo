import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';
import Select from '../Select';

class Filter extends Component {
  render() {
    const {
      filterName,
      filterRare,
      filterTrunfo,
      onSearchChange,
      onSearchButtonClick,

    } = this.props;

    const isFilter = true;

    return (
      <div className="filter__form">
        <form id="formRefSubmit">
          <Input
            id="name-filter"
            type="text"
            name="filterName"
            dataTestid="name-filter"
            classLabel="form-label"
            classElement="form-control"
            classDiv="col-lg-12"
            value={ filterName }
            label="Name"
            disabled={ filterTrunfo }
            onChange={ onSearchChange }
          />

          <Select
            id="rare-filter"
            name="filterRare"
            dataTestid="rare-filter"
            classLabel="form-label"
            classElement="form-select card__rare-select"
            defaultValue=""
            value={ filterRare }
            label="Rarity"
            onChange={ onSearchChange }
            isFilter={ isFilter }
            disabled={ filterTrunfo }
            options={ [
              { optionText: 'normal', optionValue: 'normal' },
              { optionText: 'raro', optionValue: 'raro' },
              { optionText: 'muito raro', optionValue: 'muito-raro' },
            ] }
          />

          <Input
            id="trunfo-filter"
            type="checkbox"
            name="filterTrunfo"
            dataTestid="trunfo-filter"
            classLabel="form-label"
            classElement="form-control"
            value={ filterTrunfo }
            label="Super Trunfo"
            onChange={ onSearchChange }
          />

          <Button
            id="submit"
            type="submit"
            dataTestid="search-button"
            classElement="btn btn-primary"
            classDiv="card__btn-search-div"
            disabled={ false }
            label="Buscar"
            onClick={ onSearchButtonClick }
          />
        </form>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func,
}.isRequired;

export default Filter;
