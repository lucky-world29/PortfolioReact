import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <p className="text-center">
          Have questions or want to get in touch? Fill out the form below or visit the{" "}
          <Link to="/about#about-section" className="about-link">
            About Us
          </Link>{" "}
          page to learn more about us.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
