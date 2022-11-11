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
      <li className={`mx-2 ${!contactSelected && !portfolioSelected && !resumeSelected && 'navActive'}`}>
          <a href="#about" onClick={() => setAboutSelected(true) }>
          About Me
          </a>
      </li>
      <li className={`mx-2 ${!contactSelected && !aboutSelected && !resumeSelected && portfolioSelected && 'navActive'}`}>
          <span onClick={()=>setPortfolioSelected(true)}>Portfolio</span>
      </li>
      <li className={`mx-2 ${!aboutSelected && !portfolioSelected && !resumeSelected && contactSelected && 'navActive'}`}>
          <span onClick={()=>setContactSelected(true)}>Contact</span>
      </li>
      <li className={`mx-2 ${!contactSelected && !portfolioSelected && !aboutSelected && resumeSelected && 'navActive'}`}>
          <span onClick={()=>setResumeSelected(true)}>Resume</span>
      </li>
    </ul>
</nav>
    </header>
  );
};

export default Header;