import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png'; 

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />  
      </div>
      <div className="header-listing">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
