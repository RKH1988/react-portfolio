import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
        aboutSelected,
        setAboutSelected
      } = props;

    return (
        <nav className="text-center container flex-row justify-space-between-lg justify-center align-center">
              <ul className="flex-row">
                <li className={`mx-2 ${!contactSelected && !portfolioSelected && !resumeSelected && 'navActive'}`}>
                    <a href="#about" onClick={() => setAboutSelected(true) }>
                    About Me
                    </a>
                </li>
                <li className={`mx-2 ${!contactSelected && !aboutSelected && !resumeSelected && 'navActive'}`}>
                    <span onClick={()=>setPortfolioSelected(true)}>Portfolio</span>
                </li>
                <li className={`mx-2 ${!aboutSelected && !portfolioSelected && !resumeSelected && 'navActive'}`}>
                    <span onClick={()=>setContactSelected(true)}>Contact</span>
                </li>
                <li className={`mx-2 ${!contactSelected && !portfolioSelected && !aboutSelected && 'navActive'}`}>
                    <span onClick={()=>setResumeSelected(true)}>Resume</span>
                </li>
              </ul>
        </nav>
    );
  }
  
  export default Nav;