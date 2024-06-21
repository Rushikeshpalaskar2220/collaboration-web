import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Contact Info" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;