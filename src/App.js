import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardAttr1Label: '',
      cardAttr2Label: '',
      cardAttr3Label: '',
      cardImage: '',
      cardRare: false,
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  handleChange({ target }) {
    const dataLabel = target.getAttribute('data-label');
    const { name, value, id, checked } = target;
    console.log(`Resultado ==> name: ${name} value: ${value} id: ${id} label: ${dataLabel}`);
    if (id === 'attr1') {
      this.setState({ cardAttr1Label: dataLabel });
    } else if (id === 'attr2') {
      this.setState({ cardAttr2Label: dataLabel });
    } else if (id === 'attr3') {
      this.setState({ cardAttr3Label: dataLabel });
    } else if (id === 'rarity') {
      this.setState({ cardRareLabel: dataLabel });
    }
    this.setState({ [name]: value });
    this.setState({ cardTrunfo: checked });
  }

  handleButtonClick() {
    console.log('Clicou!');
  }

  render() {
    return (
      <>
        <header>
          <section className="header">
            <div className="header__title">
              <h1>Tryunfo</h1>
            </div>
          </section>
        </header>
        <main>
          <section className="form">
            <div className="form__div">
              <h1 className="form__title">Add new card</h1>
              <Form
                onInputChange={ this.handleChange }
              />
            </div>
          </section>
          <section className="card">
            <div className="card__div">
              <h1 className="card__title">Card</h1>
              <Card
                cardTopic="Luxury Cars"
                cardName={ this.state.cardName }
                cardDescription={ this.state.cardDescription }
                cardAttr1={ this.state.cardAttr1 }
                cardAttr2={ this.state.cardAttr2 }
                cardAttr3={ this.state.cardAttr3 }
                cardAttr1Label={ this.state.cardAttr1Label }
                cardAttr2Label={ this.state.cardAttr2Label }
                cardAttr3Label={ this.state.cardAttr3Label }
                cardImage={ this.state.cardImage }
                cardRare={ this.state.cardRare }
                cardRareLabel={ this.state.cardRareLabel }
                cardTrunfo={ this.state.cardTrunfo }
              />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
