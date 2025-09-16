import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="school-info">
              <h3>SMAN 3 Lawe Sigala-gala</h3>
              <p>
                Sekolah Menengah Atas Negeri 3 Lawe Sigala-gala berkomitmen memberikan 
                pendidikan berkualitas untuk membangun generasi yang berkarakter dan berdaya saing.
              </p>
              <div className="social-links">
                <a href="javascript:void(0)" aria-label="Facebook">
                  <span className="social-icon">📘</span>
                </a>
                <a href="javascript:void(0)" aria-label="Instagram">
                  <span className="social-icon">📷</span>
                </a>
                <a href="javascript:void(0)" aria-label="YouTube">
                  <span className="social-icon">📺</span>
                </a>
                <a href="javascript:void(0)" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navigasi</h4>
            <ul className="footer-links">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#about">Tentang</a></li>
              <li><a href="#posts">Berita</a></li>
              <li><a href="#contact">Kontak</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Program</h4>
            <ul className="footer-links">
              <li><a href="javascript:void(0)">Program IPA</a></li>
              <li><a href="javascript:void(0)">Program IPS</a></li>
              <li><a href="javascript:void(0)">Ekstrakurikuler</a></li>
              <li><a href="javascript:void(0)">OSIS</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>8W3H+4G, Pardomuan II, Kec. Babul Makmur<br />Kabupaten Aceh Tenggara, Aceh 24673</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <a href="https://smanegeri3lawesigalagala.my.id" target="_blank" rel="noopener noreferrer">
                  smanegeri3lawesigalagala.my.id
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:admin@smanegeri3lawesigalagala.my.id">
                  admin@smanegeri3lawesigalagala.my.id
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} SMAN 3 Lawe Sigala-gala. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="javascript:void(0)">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="javascript:void(0)">Terms of Service</a>
              <span className="separator">|</span>
              <a href="javascript:void(0)">Sitemap</a>
            </div>
          </div>
          
          <div className="back-to-top">
            <a href="#home" className="back-to-top-btn">
              <span className="arrow-up">↑</span>
              <span className="text">Kembali ke Atas</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
