import React from 'react';
//import image1 from '../media/me.jpg';
import founder from '..//media/iddin.jpg';
import ceo from '../media/nurin.jpg';
import coo from '../media/izzati.jpg';
import cfo from '../media/aina.jpg';
//import CompanyBackground from "../media/company background.jpg";
import '../styles/Companytest.css';

function Company () {
    return (
        <div className="company">
            <h1 className="ourStaff">OUR STAFF</h1>
            <p1>
               Welcome to the heart and soul of SpaLux Beauty & Wellness – <br></br>
               where a dedicated team of passionate individuals comes together 
               to curate experiences that transcend the ordinary. <br></br>Behind every 
               rejuvenating treatment and carefully selected cosmetic product is 
               a collective commitment to beauty, well-being, and the art of self-care.
            </p1>
      <div className="container">
        <div className="box">
          <div className="imgBox">
              <img src={founder} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2>Founder & Manager Director</h2>
              <p>
              The visionary leader behind SpaLux, she brings a wealth of passion for holistic 
              beauty and wellness. Guided by a vision of self-care as an art form, she sets 
              the tone for SpaLux's journey towards radiance and tranquility.
              </p>
            </div>
          </div>
        </div>
        {/* Repeat the above structure for each box */}
        <div className="box">
          <div className="imgBox">
              <img src={ceo} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2>CEO & Spa Director</h2>
              <p>
              As our CEO & Spa Director, she orchestrates the seamless flow of our spa experiences. 
              With expertise in creating serene atmospheres, she ensures that every visit to SpaLux 
              is a retreat into luxury and relaxation.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
              <img src={coo} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2>COO & Beauty Consultant</h2>
              <p>
              Meet our COO & Beauty Consultant, she guides you to personalized beauty and wellness. 
              She is passionate about helping you discover the perfect blend of spa services and 
              ethical cosmetic products tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="imgBox">
              <img src={cfo} alt="" />
          </div>
          <div className="details">
            <div className="content">
              <h2>CFO & Marketing Specialist</h2>
              <p>
              Behind the scenes, she infuses the SpaLux brand with vibrancy. From captivating visuals 
              to engaging promotions, she ensures that the essence of SpaLux Beauty & Wellness reaches 
              and resonates with our community.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default Company;