import React from "react";

function ServiceItem({ image, name, price }) {
  return (
    <div className="serviceItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> From RM{price} </p>
    </div>
  );
}

export default ServiceItem;