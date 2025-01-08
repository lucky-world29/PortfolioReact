import React from "react";
import "./Project.css";

const PortfolioItem = ({ title, description, image, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card portfolio-card shadow">
        <img src={image} alt={title} className="card-img-top portfolio-img" />
        <div className="card-body text-center">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary btn-gradient" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
