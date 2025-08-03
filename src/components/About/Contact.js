// import React from "react";
// import { Link } from "react-router-dom";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact py-5" id="contact">
//       <div className="container">
//         <h2 className="text-center mb-5">Contact Us</h2>
//         <p className="text-center">
//           Have questions or want to get in touch? Fill out the form below or visit the{" "}
//           <Link to="/about#about-section" className="about-link">
//             About Us
//           </Link>{" "}
//           page to learn more about us.
//         </p>
//         <div className="row justify-content-center">
//           <div className="col-md-6">
//             <form>
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">Your Name</label>
//                 <input type="text" className="form-control" id="name" placeholder="Enter your name" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="form-label">Your Email</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter your email" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="message" className="form-label">Your Message</label>
//                 <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyftrwq",        // Your EmailJS Service ID
        "template_6drypr5",       // Your EmailJS Template ID
        form.current,
        "tT_IDrCYhBeTwhOVg"       // Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          console.log(result.text);
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          alert("❌ Message failed to send. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <p className="text-center">
          Have questions or want to get in touch? Fill out the form below or visit the{" "}
          <a href="/about#about-section" className="about-link">About Us</a> page.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message"
                  required
                ></textarea>
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
