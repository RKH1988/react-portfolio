import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);


  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
