import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const currentHeroRef = heroRef.current; // Store the current ref value in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentHeroRef?.classList.add("animate-scroll");
        } else {
          currentHeroRef?.classList.remove("animate-scroll");
        }
      },
      { threshold: 0.1 }
    );

    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    // Cleanup function
    return () => {
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  

  return (
    <section
      className="hero-section text-center py-5"
      id="home"
      ref={heroRef}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Column: Photo */}
          <div className="col-md-6">
            <div className="photo-container">
              <img
                src="https://i.pinimg.com/736x/9d/22/ff/9d22ff5cc190fc46d56509f5b2d86e55.jpg"
                alt="Abinash"
                className="img-fluid rounded-circle shadow"
              />
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="col-md-6">
            <h1>
              Hello, I'm <span className="text-primary">Abinash</span>
            </h1>
            <p className="lead">SOFTWARE DEVELOPER</p>
            <div className="mt-4">
              {/* <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary me-3 btn-3d"
              >
                <i className="material-icons me-2">work</i>
                My Work
              </a> */}

              {/*  */}
              
              {/* <button className="btn btn-outline-secondary btn-3d">
                <i className="material-icons me-2">person_add_alt</i>
                Connect
              </button> */}
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
