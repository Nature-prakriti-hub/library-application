import React, { useState } from 'react';
import './ContactUs.css';

const Contact = () => {
  const [query, setQuery] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1); // Track the step (1: query, 2: email, 3: thank you)

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    // Switch to email input step
    setStep(2);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Display thank you message
    setStep(3);
  };

  return (
    <div className="contact-us-container">
      {/* First Container - Company Information */}
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p><strong>Company:</strong> LIBWORLD</p>
        <p><strong>Address:</strong> India</p>
        <p><strong>Phone No:</strong> 1234567890</p>
        <p><strong>Email:</strong> <a href="mailto:libworld@corp.com">libworld@corp.com</a></p>
      </div>

      {/* Second Container - Google Map */}
      <div className="contact-container">
        <h3>Find Us On Google Maps</h3>
        <iframe
          title="Google Map Location"
          width="100%"
          height="300px"
          frameBorder="0"
          style={{ border: '0' }}
          src="https://www.google.com/maps/embed/v1/place?q=India&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
        ></iframe>
      </div>

      {/* Third Container - Query Form */}
      <div className="contact-container">
        <h2>Submit Your Query</h2>
        {step === 1 && (
          <form onSubmit={handleQuerySubmit} className="contact-form">
            <textarea
              value={query}
              onChange={handleQueryChange}
              placeholder="Please enter your query here."
              className="contact-textarea"
            />
            <div className="contact-button-container">
              <button type="submit" className="contact-button">
                Submit Query
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleEmailSubmit} className="contact-form">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Please enter your email address."
              className="contact-input"
              required
            />
            <div className="contact-button-container">
              <button type="submit" className="contact-button">
                Submit Email
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="thank-you-message">
            <h3>Thank you for your query! We will respond soon.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;