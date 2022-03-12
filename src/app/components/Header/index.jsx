// This component render a Header.
import React from 'react';
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <div id="velas">
        <div id="vela1"></div>
        <div id="vela2"></div>
        <div id="vela3"></div>
      </div>
      <div id="header-hr"></div>
      <div id="header-text"><p id="p1">Análise Geral</p><p id="p2">/</p><p id="p3">Principal</p></div>
    </div>
  );
}

export default Header;
