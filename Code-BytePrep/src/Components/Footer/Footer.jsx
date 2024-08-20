import React from 'react';
import logo from '../../assets/Images/logo/Logo.png'

import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="footer-logo" />
            <h2>Logo</h2>
          </div>
          <address>
            <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
          </address>
          <div className="contact">
            <p>Contact: 1800 123 4567</p>
            <p>info@electcode.io</p>
          </div>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Tests</a></li>
            <li><a href="#">Company wise</a></li>
            <li><a href="#">How to begin?</a></li>
            <li><a href="#">Test wise</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Logo. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
