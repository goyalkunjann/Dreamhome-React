import React from 'react';
import './Home.css';
import home from '../../assets/house.png';

const Home = () => {
  return (
    <div className='container'>
      <div className='image-container'>
        <img src={home} alt='Home constructor' />
        <h1>#1 Home constructor in India</h1>
        <h2>Innovative Modular Homes <br /> for the Future Generation</h2>
       
      </div>

      {/* Section for headings and descriptions */}
      <div className='stats-container'>
        <div className='stat-item'>
          <h3>120K</h3>
          <p>Employees work in all parts of the world</p>
        </div>
        <div className='stat-item'>
          <h3>315</h3>
          <p>Projects Completed all over India</p>
        </div>
        <div className='stat-item'>
          <h3>10 years</h3>
          <p>10 years warranty provided</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
