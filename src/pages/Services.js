import React from "react";
import { Link } from "react-router-dom";
import { ServiceList } from "../helpers/ServiceList";
import ServiceItem from "../components/ServiceItem";
import "../styles/Services.css";

const serviceRoutes = {
  "Massages": "massage",
  "Facial Treatments": "facial",
  "Sauna Room" : "sauna",
  "Nail Care": "nail",
  "Hair Removal": "hair",
  "Medical Spa Services": "medical",
};

function Services() {
  return (
    <div className="service">
      <h1 className="serviceTitle">OUR SERVICES</h1>
      <div className="serviceList">
        {ServiceList.map((serviceItem, key) => (
          <Link to={`/service/${serviceRoutes[serviceItem.name]}`} key={key}>
            <ServiceItem
              image={serviceItem.image}
              name={serviceItem.name}
              price={serviceItem.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
