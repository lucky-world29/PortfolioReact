import React, { useEffect, useRef } from "react";
import "./About.css";

const About = ({ footerRef }) => {
    const aboutRef = useRef(null);

    useEffect(() => {
        const currentAboutRef = aboutRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    currentAboutRef?.classList.add("animate-scroll");
                } else {
                    currentAboutRef?.classList.remove("animate-scroll");
                }
            },
            { threshold: 0.1 }
        );

        if (currentAboutRef) {
            observer.observe(currentAboutRef);
        }

        return () => {
            if (currentAboutRef) {
                observer.unobserve(currentAboutRef);
            }
        };
    }, []);

    const handleScrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="about py-5" id="about" ref={aboutRef}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <img
                            src="https://i.pinimg.com/736x/33/89/a1/3389a10de17631503e40e00c8e3f557f.jpg"
                            alt="About"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2>👋 About Me</h2>
                        <p>FULL STACK DEVELOPER</p>
                        <p>
                            Hi, I’m Abinash Behera — a passionate Full-Stack Developer who loves turning ☕ coffee and 🍜 
                            ramen into clean, impactful code.
                            With a strong foundation in mathematics and a problem-solving mindset, I specialize 
                            in building modern web applications using React, Spring Boot, and Java. 
                            Whether it’s designing beautiful user interfaces or building scalable backend systems,
                            I’m all about writing code that performs well, looks great, and solves real-world problems.
                            I’m driven by continuous learning and love diving into new tools, frameworks,
                             and ideas that help me grow as a developer.
                        </p>

  <h2>⚡ Fun Stuff</h2>
  <ul>
    <li>🎌 Anime is my ultimate downtime escape</li>
    <li>☕ Coffee keeps the logic flowing</li>
    <li>✨ I see code as a form of creative expression</li>
    <li>📢 I enjoy sharing dev tips and helping others in the tech space</li>
  </ul>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={handleScrollToFooter}
                        >
                            Find Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
