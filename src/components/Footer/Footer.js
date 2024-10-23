"use client";
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">About us</div>

        <div className="footer-grid">
          {/* Site Map Section */}
          <div className="footer-column">
            <span className="footer-heading">Site Map</span>
            <ul className="footer-list">
              <li><a href="/service">Services</a></li>
              <li><a href="/ourprojects">Our Projects</a></li>
              <li><a href="/howitwork">How It Works</a></li>
              
            </ul>
          </div>

          {/* Information Section */}
          <div className="footer-column">
            <span className="footer-heading">Information</span>
            <ul className="footer-list">
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/faqss">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column">
            <a href="mailto:invest@housebanao.com" className="footer-link">support@housebanao.com</a>
            <div className="footer-address">
              746A, 7th floor, JMD Megapolis Sector 48, Gurgaon, Haryana 122018
            </div>
             {/* 
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=61557081024259" className="social-icon">Facebook</a>
              <a href="https://www.instagram.com/house_banao" className="social-icon">Instagram</a>
              <a href="https://www.linkedin.com/company/housebanao2/" className="social-icon">LinkedIn</a>
              <a href="https://www.youtube.com/@HouseBanaoo" className="social-icon">YouTube</a>
              <a href="https://in.pinterest.com/house_banao/" className="social-icon">Pinterest</a>
            </div>
            */}
          </div>
        </div>

        <div className="footer-bottom">
          © 2024 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
