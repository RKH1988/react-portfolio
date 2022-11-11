import React from 'react';

function Header() {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className='mx-4'>RK's Portfolio</h1>
        <nav className="text-center">
              <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                    About Me
                    </a>
                </li>
                <li className="mx-2">
                    <span>Portfolio</span>
                </li>
                <li className="mx-2">
                    <span>Contact</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
              </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;