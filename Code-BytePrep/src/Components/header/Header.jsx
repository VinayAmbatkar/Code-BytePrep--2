import React from 'react';
import './Header.css';
import logo from '../../assets/Images/logo/Logo.png';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} alt="logo" className="logo" />
        <div className="search-bar">
          <input type="text" placeholder="Search here..." />
        </div>
        <nav className="nav-links">
          <ol className="flex space-x-8">
            <li><a href="#practice" className="hover:text-gray-900 cursor-pointer">Practice</a></li>
            <li><a href="#compete" className="hover:text-gray-900">Compete</a></li>
            <li><a href="#explore" className="hover:text-gray-900">Explore</a></li>
            <li><a href="#login" className="text-purple-500 hover:text-purple-700">Login</a></li>
          </ol>
        </nav>
        <button className="sign-up-button ml-6">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
