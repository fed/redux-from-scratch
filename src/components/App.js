import React from 'react';
import Counter from './Counter';
import Loading from './Loading';
import './App.css';

const App = () => (
  <section className="App">
    <header className="App-header">
      <h1>Implementing Redux from scratch</h1>
    </header>

    <Counter />
    <Loading />
  </section>
);

export default App;
