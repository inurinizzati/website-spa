import React from "react";
//import TeamMembers from "../media/headerabout.jpg";
import "../styles/About.css";
//import "../styles/Video.css";
import Video from '../components/Video.js';

function About() {
  return (
    <div className="about">
      <Video />
      <div className="aboutTop" >
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        
        <p1>Mission </p1>
        <p>
        Our mission at LuxeAura Beauty & Wellness is to create a haven of peace and rejuvenation 
        where each client is treated to a holistic experience that nurtures the mind, body, and soul. 
        We are committed to providing outstanding spa services that encourage relaxation, self-care, 
        and a sense of well-being. We aspire to be the go-to destination for individuals seeking a 
        sanctuary for beauty, relaxation, and self-discovery through our commitment to excellence and personalized care.</p>

        <p1>Vision </p1>
        <p>
        LuxeAura Beauty & Wellness envisions a world where self-care is a treasured ritual 
        and everyone can enjoy moments of blissful serenity. Our vision goes beyond the traditional 
        spa experience; we want to be a holistic wellness centre that combines beauty, health, 
        and mindfulness. We aim to empower our clients to enhance their natural beauty and embrace a 
        self-love lifestyle by curating a selection of premium cosmetic products. LuxeAura aspires to 
        be a source of inspiration for wellness and beauty enthusiasts, cultivating a community that 
        recognises the value of inner and outer radiance. </p>
        
      </div>
      </div>
    </div>
  );
}

export default About;