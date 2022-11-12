import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false)
  const [aboutSelected, setAboutSelected] = useState(true)


  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        >
      </Header>
      <main>
        {contactSelected ? <Contact></Contact>
          : aboutSelected ? <About></About>
          : portfolioSelected ? <Project></Project>
          : resumeSelected ? <Resume></Resume>
          : <About></About>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
