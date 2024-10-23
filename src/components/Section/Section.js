"use client";
import React from "react";
import './Section.css';
import craft1 from "../../assets/craft1.png";
import craft2 from "../../assets/craft2.png";
import craft3 from "../../assets/craft3.png";
import craft4 from "../../assets/craft4.png";
import craft5 from "../../assets/craft5.png";
import craft6 from "../../assets/craft6.png";


export const Section = () => {
  const images = [
    { src: craft1, text: "Design" },
    { src: craft2, text: "Core Materials" },
    { src: craft3, text: "Manufacturing" },
    { src: craft4, text: "Quality Checks" },
    { src: craft5, text: "Packaging" },
    { src: craft6, text: "Delivery & Installation" },
  ];

  return (
    <div className="section-container">
      <h1 className="section-heading">
        What Goes Into Crafting the Best for You
      </h1>
      <div className="section-grid">
        {images.map((img, index) => (
          <div key={index} className="section-image-container">
            <img
              src={img.src}
              alt={`Craft Image ${index + 1}`}
              className="section-image"
            />
            <div className="section-overlay">
              <p className="section-text">{img.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Section;