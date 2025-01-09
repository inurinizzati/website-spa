import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import BuildingIcon from "@mui/icons-material/Business";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <p> <PhoneIcon/> 04-4749 3698 <br></br>
            <BuildingIcon/> LuxeAura Beauty & Spa 
            GF-144 Queensbay Mall, <br></br>
            Persiaran Bayan Indah, <br></br>
            11900 Bayan Lepas, <br></br>
            Pulau Pinang. </p>
        <p> &copy; 2024 luxeauraspa.com</p>
      </div>
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      
      
    </div>
  );
}

export default Footer;