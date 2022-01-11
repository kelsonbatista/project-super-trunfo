import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardAttr1Label: '',
      cardAttr2Label: '',
      cardAttr3Label: '',
      cardImage: '',
      cardRare: '',
      cardRareLabel: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButtonDisabled = this.handleButtonDisabled.bind(this);
  }

  handleChange({ target }) {
    const dataLabel = target.getAttribute('data-label');
    const { name, value, id, checked } = target;
    if (id === 'attr1') {
      this.setState({ cardAttr1Label: dataLabel });
    } else if (id === 'attr2') {
      this.setState({ cardAttr2Label: dataLabel });
    } else if (id === 'attr3') {
      this.setState({ cardAttr3Label: dataLabel });
    } else if (id === 'rarity') {
      this.setState({ cardRareLabel: dataLabel });
    }
    this.setState({
      [name]: value,
      cardTrunfo: checked,
    }, this.handleButtonDisabled);
  }

  handleButtonClick() {
    console.log('Clicou!');
  }

  handleButtonDisabled() {
    const maxAttrAll = 210;
    const maxAttrSingle = 90;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const validation = (
      cardName !== ''
      && cardDescription !== ''
      && cardImage !== ''
      && cardRare !== ''
      && cardAttr1 !== ''
      && ((Number(cardAttr1) >= 0) && (Number(cardAttr1) <= maxAttrSingle))
      && ((Number(cardAttr2) >= 0) && (Number(cardAttr2) <= maxAttrSingle))
      && ((Number(cardAttr3) >= 0) && (Number(cardAttr3) <= maxAttrSingle))
      && ((Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxAttrAll)
    );
    console.log(validation);
    this.setState({ isSaveButtonDisabled: !validation });
  }

  render() {
    const {
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
      isSaveButtonDisabled,
    } = this.state;

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
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onSaveButtonClick={ this.handleButtonClick }
                onInputChange={ this.handleChange }
              />
            </div>
          </section>
          <section className="card">
            <div className="card__div">
              <h1 className="card__title">Card</h1>
              <Card
                cardTopic="Luxury Cars"
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardAttr1Label={ cardAttr1Label }
                cardAttr2Label={ cardAttr2Label }
                cardAttr3Label={ cardAttr3Label }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardRareLabel={ cardRareLabel }
                cardTrunfo={ cardTrunfo }
              />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
