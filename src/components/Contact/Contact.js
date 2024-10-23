import React from 'react';
import contactt from '../../assets/contact.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Left Side Form */}
        <div className="contact-form">
          <h1 className="heading-1">Get in Touch</h1>
          <h2 className="heading-2">
            Let's chat, Reach out <br />
            to us.
          </h2>
          <p className="contact-description">
            Have questions or feedback? We’re here to help. <br />
            Send us a message, and we’ll respond in 24 hours.
          </p>
          <form className="form">
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">First Name</label>
                <input type="text" placeholder="First Name" className="form-input" />
              </div>
              <div className="form-field">
                <label className="form-label">Last Name</label>
                <input type="text" placeholder="Last Name" className="form-input" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Email Address</label>
                <input type="email" placeholder="Email Address" className="form-input" />
              </div>
              <div className="form-field">
                <label className="form-label">Phone Number</label>
                <input type="text" placeholder="Phone Number" className="form-input" />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Reason of Contact</label>
              <textarea
                placeholder="Leave a message"
                className="form-textarea"
              ></textarea>
            </div>
            <div className="form-button">
              <button type="submit" className="submit-button">Submit</button>
            </div>
          </form>
        </div>

        {/* Right Side Boxes */}
        <div className="contact-details">
          <div className="contact-image-container">
            <img src={contactt} alt="Contact" className="contact-image" />
          </div>
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </div>
              <div className="info-text">
                <p className="info-title">Email</p>
                <p className="info-content">support@housebanao.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} size="lg" />
              </div>
              <div className="info-text">
                <p className="info-title">Phone number</p>
                <p className="info-content">+91 9810432124</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <FontAwesomeIcon icon={faBuilding} size="lg" />
              </div>
              <div className="info-text">
                <p className="info-title">Address</p>
                <p className="info-content">746A, 7th floor, JMD megapolis sector 48, Gurgaon, Haryana 122018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
