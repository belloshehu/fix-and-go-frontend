import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trust />
    </div>
  );
}

export default App;
