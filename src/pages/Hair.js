import React from "react";
import { Link } from "react-router-dom";
import HairBackground from "../media/hairbackground.webp";
import Clock from "../media/clock.jpg";
import "../styles/Hair.css";

function Hair() {
  return (
    <div className="hair">
    <div className="aboutTop" style={{ backgroundImage: `url(${HairBackground})` }}>
      <div className="overlayTextH">
        <h1>Hair Removal Services</h1>
        <p>Indulge in a luxurious facial treatment designed to enhance your skin's natural 
            radiance and leave you feeling refreshed and pampered.</p>
      </div>
    </div>
      <div className="aboutMiddle">
      <HairType
          title="Smooth & Silky Package"
          description="Achieve smooth and silky skin with our comprehensive hair removal package.
          Includes full-body waxing or sugaring sessions to remove unwanted hair from head to toe.
          Enjoy long-lasting results and a touchably soft feel."
          durations={["60 Mins"]}
        />
        <HairType
          title="Laser Hair Removal Series"
          description="Say goodbye to shaving with our Laser Hair Removal Series.
          Customized sessions targeting specific areas for permanent hair reduction.
          Experience the benefits of advanced laser technology for a hair-free lifestyle."
          durations={["60 Mins"]}
        />
        <HairType
          title="Gentle Facial Hair Removal"
          description="Address facial hair concerns with our Gentle Facial Hair Removal package.
          Delicate waxing or threading techniques for eyebrows, upper lip, and chin.
          Achieve a polished and well-groomed appearance."
          durations={["60 Mins"]}
        />
        <Link to="/service">
          <button className="backButton">Back to Services</button>
        </Link>
      </div> 
    </div>
  );
}

const HairType = ({ title, description, durations, image }) => (
  <div className="hairType">
    <div className="typeHeader">
      <h1>{title}</h1>
      {image && <img src={image} alt={title} className="typeImage" />}
    </div>
    <p>{description}</p>
    <div className="typeDurations">
      {durations.map((duration, index) => (
        <div key={index} className="durationItem">
          <img src={Clock} alt="Clock" className="durationImage" />
          <p>{duration}</p>
          
        </div>
      ))}
    </div>
  </div>
);
  
export default Hair;