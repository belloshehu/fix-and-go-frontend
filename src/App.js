import React from 'react';
import './App.css';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Trust } from './components/Trust';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trust />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
