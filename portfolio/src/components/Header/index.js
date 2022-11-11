import React from 'react';

function Header(props) {
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
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between justify-center align-center">
        <a href="/"><h1 className='mx-4'>RK's Portfolio</h1></a>
      </div>
    <nav className="text-center container flex-row justify-space-between-lg justify-center align-center">
    <ul className="flex-row">
      <li className={`mx-2 ${!contactSelected && !portfolioSelected && !resumeSelected && aboutSelected && 'navActive'}`}>
          <a href="#about" onClick={() => {setAboutSelected(true); setContactSelected(false); setPortfolioSelected(false); setResumeSelected(false)}}>
          About Me
          </a>
      </li>
      <li className={`mx-2 ${!contactSelected && !aboutSelected && !resumeSelected && portfolioSelected && 'navActive'}`}>
          <span onClick={()=> {setAboutSelected(false); setContactSelected(false); setPortfolioSelected(true); setResumeSelected(false)}}>Portfolio</span>
      </li>
      <li className={`mx-2 ${!aboutSelected && !portfolioSelected && !resumeSelected && contactSelected && 'navActive'}`}>
          <span onClick={()=> {setAboutSelected(false); setContactSelected(true); setPortfolioSelected(false); setResumeSelected(false)}}>Contact</span>
      </li>
      <li className={`mx-2 ${!contactSelected && !portfolioSelected && !aboutSelected && resumeSelected && 'navActive'}`}>
          <span onClick={()=> {setAboutSelected(false); setContactSelected(false); setPortfolioSelected(false); setResumeSelected(true)}}>Resume</span>
      </li>
    </ul>
</nav>
    </header>
  );
};

export default Header;