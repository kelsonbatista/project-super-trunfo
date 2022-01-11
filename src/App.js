import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import List from './components/List';

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
      cardList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
    this.handleButtonDisabled = this.handleButtonDisabled.bind(this);
    this.resetState = this.resetState.bind(this);
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

  handleSaveButtonClick(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      cardList: [...prevState.cardList, {
        cardName: prevState.cardName,
        cardDescription: prevState.cardDescription,
        cardAttr1: prevState.cardAttr1,
        cardAttr2: prevState.cardAttr2,
        cardAttr3: prevState.cardAttr3,
        cardAttr1Label: prevState.cardAttr1Label,
        cardAttr2Label: prevState.cardAttr2Label,
        cardAttr3Label: prevState.cardAttr3Label,
        cardImage: prevState.cardImage,
        cardRare: prevState.cardRare,
        cardRareLabel: prevState.cardRareLabel,
        cardTrunfo: prevState.cardTrunfo,
      }],
    }));
    this.resetState();
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

  resetState() {
    this.setState({
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
      isSaveButtonDisabled: true,
    });
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
      cardList,
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
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardAttr1Label="Price"
                cardAttr2Label="Speed"
                cardAttr3Label="Torch"
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardRareLabel="Rarity"
                cardTrunfo={ cardTrunfo }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onSaveButtonClick={ this.handleSaveButtonClick }
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
          <section className="list">
            <div className="list__div">
              <h1 className="list__title">List</h1>
              <List
                cardName={ cardName }
                cardList={ cardList }
              />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
