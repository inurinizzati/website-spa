import React from "react";
import { Link } from "react-router-dom";
import SaunaBackground from "../media/saunabackground.webp";
import Clock from "../media/clock.jpg";
import "../styles/Sauna.css";

function Sauna() {
  return (
    <div className="sauna">
    <div className="aboutTop" style={{ backgroundImage: `url(${SaunaBackground})` }}>
      <div className="overlayTextS">
        <h1>Sauna Services</h1>
        <p> Surrender to the warmth, whether in dry heat or soothing steam. 
            Melt away tension, cleanse your skin, and bask in the pure tranquility of relaxation and rejuvenation.</p>
      </div>
    </div>
      <div className="aboutMiddle">
      <SaunaType
          title="Couples Sauna Bliss"
          description="Share a blissful sauna experience with your partner with our Couples Sauna Bliss package.
          Relax side by side in a private sauna suite, complete with aromatic steam and mood lighting.
          Perfect for couples seeking a tranquil escape and intimate relaxation."
          durations={["60 Mins","90 Mins"]}
        />
        <SaunaType
          title="Sauna & Spa Day Pass"
          description="Embark on a full day of pampering with our Sauna & Spa Day Pass package.
          Access our sauna facilities, followed by a range of spa amenities such as hot tubs and cold plunge pools.
          Treat yourself to a day of complete relaxation and self-care."
          durations={[]}
        />
        <SaunaType
          title="Gentle Sauna for Seniors"
          description="Tailored for seniors, our Gentle Sauna package offers a milder heat experience.
          Enjoy the therapeutic benefits of sauna in a comfortable setting designed for older adults.
          Promote circulation, ease joint discomfort, and enhance overall well-being."
          durations={["60 Mins","90 Mins"]}
        />
        <Link to="/service">
          <button className="backButton">Back to Services</button>
        </Link>
      </div> 
    </div>
  );
}

const SaunaType = ({ title, description, durations, image }) => (
  <div className="saunaType">
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

export default Sauna;