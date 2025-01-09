import React from "react";
import { Link } from "react-router-dom";
import NailBackground from "../media/nailbackground.jpg";
import Clock from "../media/clock.jpg";
import "../styles/Nail.css";

function Nail() {
  return (
    <div className="nail">
    <div className="aboutTop" style={{ backgroundImage: `url(${NailBackground})` }}>
      <div className="overlayTextN">
        <h1>Nail Care Services</h1>
        <p>Experience the ultimate in nail care with our rejuvenating nail treatment, leaving your hands and nails looking and feeling beautifully manicured and revitalized.</p>
      </div>
    </div>
      <div className="aboutMiddle">
      <NailType
          title="Classic Manicure"
          description="Treat your hands to the timeless elegance of our Classic Manicure package.
          Includes nail shaping, cuticle care, a relaxing hand massage, and your choice of regular polish for a polished and refined look."
          durations={[]}
        />
        <NailType
          title="Gel Polish Delight"
          description="Enjoy long-lasting color and shine with our Gel Polish Delight package.
          Includes nail shaping, cuticle care, gel polish application, and a nourishing hand massage for a vibrant and durable finish."
          durations={[]}
        />
        <NailType
          title="Nail Care for Gentlemen"
          description="Tailored for men, our Nail Care for Gentlemen package offers essential grooming and relaxation.
          Nail shaping, cuticle care, and a rejuvenating hand massage for gentlemen seeking well-maintained and healthy nails."
          durations={[]}
        />
        <Link to="/service">
          <button className="backButton">Back to Services</button>
        </Link>
      </div> 
    </div>
  );
}

const NailType = ({ title, description, durations, image }) => (
  <div className="nailType">
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
  
export default Nail;