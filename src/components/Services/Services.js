import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";

const services = [
  {
    icon: <WebIcon style={{ fontSize: "48px", color: "#ff5722" }} />,
    title: "Web Design",
    description: "We create beautiful and functional designs.",
  },
  {
    icon: <CodeIcon style={{ fontSize: "48px", color: "#2196f3" }} />,
    title: "Development",
    description: "High-quality development solutions.",
  },
  {
    icon: <MobileFriendlyIcon style={{ fontSize: "48px", color: "#4caf50" }} />,
    title: "Mobile Apps",
    description: "Responsive and engaging apps.",
  },
];

const Services = () => (
  <section className="services py-5" id="services">
    <div className="container">
      <h2 className="text-center mb-5">Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
