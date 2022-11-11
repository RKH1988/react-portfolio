import React from 'react';
import Nav from '../../components/Nav';

function Header() {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between justify-center align-center">
        <a href="/"><h1 className='mx-4'>RK's Portfolio</h1></a>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;