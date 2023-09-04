import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

function Contact() {
  return (
    <div className="container">
      <h2 className="header">Contact Page</h2>
      <div className="contact-info">
        <p>
          Thank you for visiting my website! If you'd like to get in touch, you can reach me through the following methods:
        </p>
        <ul>
          <li>Email: example@email.com</li>
          <li>Phone: (123) 456-7890</li>
        </ul>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
