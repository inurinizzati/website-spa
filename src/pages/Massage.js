import React from "react";
import { Link } from "react-router-dom";
import MassageBackground from "../media/massageheader.jpg";
import Clock from "../media/clock.jpg";
import "../styles/Massage.css";

function Massage() {
  return (
    <div className="massage">
    <div className="aboutTop" style={{ backgroundImage: `url(${MassageBackground})` }}>
      <div className="overlayTextM">
        <h1>Massage Services</h1>
        <p>Relax and rejuvenate with our expert massage therapists.</p>
      </div>
    </div>
      <div className="aboutMiddle">
      <MassageType
          title="Signature Javanese Oil Massage"
          description="Javanese massage uses all parts of the hand, palm and thumb to knead and massage the muscles. 
          It works on the muscles and nerves to relieve tension, back pain, reducing fatigues and improving blood circulation. 
          Overall, this treatment gives the receiver feeling more rejuvenated. Although this treatment is the most robust, it is greatly beneficial in the long run."
          durations={["120 Mins", "90 Mins", "60 Mins"]}
        />
        <MassageType
          title="Aromatherapy Oil Massage"
          description="Aromatherapy uses fragrant oils extracted from herbs, flowers and fruits for healing. 
          The various types of aromatic oils have their own therapeutic benefits to calm, uplift, cleanse, energise the body. 
          The essential oils penetrate into the skin to soothe away stress and tension, improve blood and lymphatic circulation, facilitate relaxation and create a sense of well-being."
          durations={["120 Mins", "90 Mins", "60 Mins"]}
        />
        <MassageType
          title="De Stone Therapy Massage"
          description="A natural therapy that comes with therapeutic oils in which warm basalt stones are positioned on parts of the body to expand blood vessels and improve blood circulation. 
          The therapist applies light pressure and massage in circular motion while the hot stones have a soothing effect that can relieve chronic pain, reduce stress and promote deep relaxation."
          durations={["120 Mins", "90 Mins"]}
        />
        <Link to="/service">
          <button className="backButton">Back to Services</button>
        </Link>
      </div> 
    </div>
  );
}

const MassageType = ({ title, description, durations, image }) => (
  <div className="massageType">
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

export default Massage;