import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

class Filter extends Component {
  render() {
    const {
      filterName,
      onInputChange,
      onSearchButtonClick,
    } = this.props;

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
            onChange={ onInputChange }
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
