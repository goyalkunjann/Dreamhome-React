import React from 'react';
import './MeetingSteps.css';
import Details from '../../assets/Detail.png';

const MeetingSteps = () => {
  return (
    <div className="ms-container">
      <div className="ms-left-section">
        <h2>Your dream home in 6 steps</h2>
        <p>Looking to design your home interiors? Here’s how you can get started.</p>
        <button className="ms-get-in-touch-btn">Get in Touch</button>
        <div className="ms-steps-wrapper">
          {[
            { stepNumber: '01', title: 'Raise a request', details: 'View details' },
            { stepNumber: '02', title: 'Meet our expert', details: 'View details' },
            { stepNumber: '03', title: 'Book with us', details: 'View details' },
            { stepNumber: '04', title: 'Receive detail plan', details: 'View details' },
            { stepNumber: '05', title: 'Track & transact', details: 'View details' },
            { stepNumber: '06', title: 'Move in', details: 'View details' },
          ].map((step, index) => (
            <div className="ms-step-box" key={index}>
              <div className="ms-step-number">{step.stepNumber}</div>
              <div className="ms-step-title">{step.title}</div>
              <div className="ms-step-details">
                <button className="ms-link-button">{step.details}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ms-right-section">
        <img
          src={Details}
          alt="Home Design"
          className="ms-right-image"
        />
      </div>
    </div>
  );
};

export default MeetingSteps;
