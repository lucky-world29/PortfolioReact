import React from "react";
import PortfolioItem from "./PortfolioItem";
import "./Project.css";

const projects = [
  {
    title: "Project One",
    description: "A beautiful and creative project showcasing design excellence.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    title: "Project Two",
    description: "A cutting-edge application built with modern technology.",
    image: "https://via.placeholder.com/300x200", 
    link: "#",
  },
  {
    title: "Project Three",
    description: "An innovative web app solving real-world problems.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

const Project = () => {
  return (
    <section className="portfolio py-5" id="portfolio">
      <div className="container">
      <h2 className="text-center mb-4" 
    style={{
      fontFamily: "'Poppins', sans-serif", 
      fontWeight: '700', 
      background: 'linear-gradient(45deg, #ff6347, #6a11cb)', 
      WebkitBackgroundClip: 'text', 
      color: 'transparent'
    }}>
  My Project
</h2>

        <p className="text-center mb-5" style={{ color: '#ffffff' }}>
            Check out some of my amazing projects below. 
        </p>
<div className="row">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
