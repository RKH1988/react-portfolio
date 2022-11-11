import React from 'react';
import pdf from '../../Assets/resume.pdf'

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
      } = props;

    return (
        <nav className="text-center container flex-row justify-space-between-lg justify-center align-center">
              <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => setContactSelected(false) }>
                    About Me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick href="#portfolio">Portfolio</span>
                </li>
                <li className="mx-2">
                    <a href="#contact">Contact</a>
                </li>
                <li className="mx-2">
                    <a href={pdf} rel="noreferrer" target="_blank">Resume</a>
                </li>
              </ul>
        </nav>
    );
  }
  
  export default Nav;