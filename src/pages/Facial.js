import React from "react";
import { Link } from "react-router-dom";
import FacialBackground from "../media/facialbackground.jpg";
import Clock from "../media/clock.jpg";
import "../styles/Facial.css";

function Facial() {
  return (
    <div className="facial">
    <div className="aboutTop" style={{ backgroundImage: `url(${FacialBackground})` }}>
      <div className="overlayTextF">
        <h1>Facial Treatment Services</h1>
        <p>Indulge in a luxurious facial treatment designed to enhance your skin's natural 
            radiance and leave you feeling refreshed and pampered.</p>
      </div>
    </div>
      <div className="aboutMiddle">
      <FacialType
          title="Mini Facial"
          description="Mini facials are a cosmetic treatment usually performed at beauty salons and spas designed to give you most of the benefits of a full facial in less time. 
          A mini facial usually lasts around 30 minutes, making it a convenient option for people with busy schedules and little time to spare."
          durations={["30 Mins"]}
        />
        <FacialType
          title="Acne Clearance Facial"
          description="If you are struggling with acne, your typical acne facial cleanser might not be cutting it. 
          The acne facial is an alternative treatment designed to treat the root cause of acne with minimal side effects. Acne facials focus primarily on extractions for blocked pores. 
          The extraction process releases any excess build-up of oil and cleans out dirt that might be clogging up your pores. 
          This can reduce the look and feel of acne and calm inflammation in your skin."
          durations={["90 Mins"]}
        />
        <FacialType
          title="Firming Eye Treatment"
          description="A firming treatment for the eye area to help diminish puffiness eye and soften wrinkles. 
          This treatment can be performed as added on to any of our facial treatment."
          durations={["30 Mins"]}
        />
        <Link to="/service">
          <button className="backButton">Back to Services</button>
        </Link>
      </div> 
    </div>
  );
}

const FacialType = ({ title, description, durations, image }) => (
  <div className="facialType">
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

export default Facial;