import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Handle email submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send a request to the backend to verify the email
    console.log('Email:', email);

    // Simulate a successful submission
    setMessage('An email with instructions to reset your password has been sent. Please check your inbox and follow the instructions.');

    // Redirect to home after a brief delay
    setTimeout(() => {
      navigate('/'); // Redirect to the home or login page
    }, 3000); // Redirect after 3 seconds
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>Forgot Password</h2>

      {!message ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Enter your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>

          <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Submit
          </button>
        </form>
      ) : (
        <div>
          <h3>{message}</h3>
          <p>If you don't see an email, check your spam folder or try again later.</p>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
