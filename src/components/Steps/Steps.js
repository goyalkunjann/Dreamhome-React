import React from 'react';
import './Steps.css';
import { FaTools, FaHandsHelping, FaMoneyBillWave, FaCheckCircle, FaEyeSlash } from 'react-icons/fa'; // Import relevant icons

const Steps = () => {
  const steps = [
    { name: 'Professional Expertise', icon: <FaTools /> },
    { name: 'Reliable Service', icon: <FaHandsHelping /> },
    { name: 'Affordable Rates', icon: <FaMoneyBillWave /> },
    { name: 'Quality Checks', icon: <FaCheckCircle /> },
    { name: 'No Hidden Costs', icon: <FaEyeSlash /> }
  ];

  return (
    <div className='customsteps-container'>
     <div class="heading">
     <h1>Focusing on quality, we <br/><span>maintain customer trust</span></h1>

  <p>
    We strive to deliver exceptional products, always putting customer satisfaction first to achieve long-term success.
  </p>
</div>

      <div className='step-container'>
        {steps.map((step, index) => (
          <div key={index} className='step'>
            <div className='step-icon'>
              {step.icon}
            </div>
            <div className='step-text'>
              {step.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
