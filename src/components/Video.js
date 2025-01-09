import React from "react";
import videointro from '../media/intro.mp4';
import '../styles/Video.css';


function Video() {
  return (
    <div className="videosection">
     <video className="video" autoPlay loop>
        <source src={videointro} type="video/mp4" />
      </video>
    </div>
  );
}

export default Video;