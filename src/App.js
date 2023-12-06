import React from 'react';
import { Cta, Brand, Navbar } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    <h1>GPT-3</h1></div>
  )
}

export default App