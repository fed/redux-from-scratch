import React from 'react';
import Counter from './Counter';
import Loading from './Loading';
import NotConnected from './NotConnected';
import './App.css';

const App = () => (
  <section className="App">
    <header className="App-header">
      <h1>Implementing Redux from scratch</h1>
    </header>

    <Counter />
    <Loading />
    <NotConnected />
  </section>
);

export default App;
