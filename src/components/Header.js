import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <div className="school-logo">
            <div className="logo-placeholder">🏫</div>
          </div>
          <div className="school-info">
            <h1 className="school-name">SMAN 3 Lawe Sigala-gala</h1>
            <p className="school-subtitle">SMA Negeri 3 Lawe Sigala-gala</p>
          </div>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Beranda</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Tentang</a></li>
            <li><a href="#posts" onClick={() => setIsMenuOpen(false)}>Berita</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontak</a></li>
          </ul>
        </nav>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
