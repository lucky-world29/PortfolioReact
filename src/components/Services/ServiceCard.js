import React from "react";

const ServiceCard = ({ icon, title, description }) => (
  <div className="col-lg-4 mb-4">
    <div className="card service-card text-center p-3">
      <div className="card-body">
        <div className="icon mb-3">{icon}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

export default ServiceCard;
