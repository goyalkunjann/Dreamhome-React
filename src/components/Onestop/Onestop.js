import React from 'react';
import './Onestop.css'; 
import one from '../../assets/image1.png';
import two from '../../assets/image2.png';
import three from '../../assets/image3.png';  // Replace with your images

const Onestop = () => {
    return (
        <div className="onestop-container">
            <div className="headings-container">
                <h1>One-Stop shop, <span>for all construction <br/> and interior</span></h1>
                <p>Be it end-to-end construction, interior, or modular solutions, we have it all for your home or  office. With a wide range of furniture & decor, we have your back from start to finish.</p>
            </div>

            <div className="boxes-container">
                {/* Box 1 */}
                <div className="box">
                    <h2>01</h2>
                    <h3>End-to-End Construction</h3>
                    <p>We handle every aspect of construction from start to finish. Offering modern modular designs that fit your needs.</p>
                    <img src={one} alt="End-to-End Construction" />
                </div>

                {/* Box 2 */}
                <div className="box second-box">
                    <img src={two} alt="Modular Solutions" />
                    <h2>02</h2>
                    <h3>Modular Solutions</h3>
                    <p>Offering modern modular designs that fit your needs. Our professional interior designers create the space of your dreams.</p>
                </div>

                {/* Box 3 */}
                <div className="box">
                    <h2>03</h2>
                    <h3>Interior Designs</h3>
                    <p>Our professional interior designers create the space of your dreams.We handle every aspect of construction from start to finish.</p>
                    <img src={three} alt="Interior Designs" />
                </div>
            </div>
        </div>
    );
};

export default Onestop;
