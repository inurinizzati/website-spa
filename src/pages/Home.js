import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../media/spabackground.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>LuxeAura Spa</h1>
        <p> HEAVENLY SERVICES FOR YOU</p>
        <Link to="/service">
          <button> CHOOSE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;