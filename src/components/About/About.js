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
                        <h2>About Me</h2>
                        <p>FULL STACK DEVELOPER</p>
                        <p>
                            I am a dedicated software developer with a strong foundation in
                            mathematics and expertise in programming, web development, and
                            software design. Proficient in technologies like Java, React.js,
                            and Spring Boot, I bring an analytical mindset and a passion for
                            creating efficient, user-focused solutions. With a commitment to
                            continuous learning and innovation, I aim to contribute
                            meaningfully to the ever-evolving tech industry.
                        </p>
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
