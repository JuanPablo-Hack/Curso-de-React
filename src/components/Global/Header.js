import React from 'react';
import logo from './images/logo.svg';
import './css/Header.css';

function Header() {
  return (
    <div className="Header">
      <header className="Logo">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Bienvenido al curso de React</h2>
      </header>
    </div>
  );
}

export default Header;
