import React from "react";
import { Link } from "react-router-dom";
import MedicalBackground from "../media/medicalbackground.avif";
import Clock from "../media/clock.jpg";
import "../styles/Medical.css";

function Medical() {
  return (
    <div className="medical">
    <div className="aboutTop" style={{ backgroundImage: `url(${MedicalBackground})` }}>
      <div className="overlayText">
        <h1>Medical Spa Services</h1>
        <p>Experience the perfect blend of wellness and beauty with our comprehensive medical spa services, 
           tailored to rejuvenate both your body and mind in a soothing and professional environment.</p>
      </div>
    </div>
      <div className="aboutMiddle">
      <MedicalType
          title="Anti-Aging Rejuvenation"
          description="Turn back the clock with our Anti-Aging Rejuvenation Package.
          Tailored skincare treatments, non-invasive facial procedures, and advanced anti-aging therapies.
          Experience a youthful glow and improved skin texture."
          durations={["60 Mins"]}
        />
        <MedicalType
          title="Weight Management and Detox Retreat"
          description="Kickstart your journey to a healthier weight with our Weight Management and Detox Retreat.
          Comprehensive weight assessment, personalized nutrition plan, and detoxifying spa therapies.
          A holistic approach to achieving and maintaining a healthy weight."
          durations={["60 Mins"]}
        />
        <MedicalType
          title="Stress Reduction and Sleep Enhancement Program"
          description="Address stress-related concerns and improve sleep quality.
          Includes stress-reducing spa treatments, sleep assessment, and relaxation therapies.
          Tailored for those seeking relief from stress and better sleep patterns."
          durations={["60 Mins"]}
        />
        <Link to="/service">
          <button className="backButton">Back to Services</button>
        </Link>
      </div> 
    </div>
  );
}

const MedicalType = ({ title, description, durations, image }) => (
  <div className="medicalType">
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

export default Medical;