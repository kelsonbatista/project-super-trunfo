import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <div>
            <h1>Tryunfo</h1>
          </div>
        </header>
        <main>
          <section className="createCard">
            <div>
              <Form />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
