import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // To toggle between the form and message display

  // Handle login submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you'd send a request to the backend here to authenticate the user
    console.log('Username:', username);
    console.log('Password:', password);

    // Simulate successful login
    setIsLoggedIn(true); // Show success message and hide the form
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      {isLoggedIn ? (
        <div>
          <h2>Login Successful</h2>
          <p>Welcome, {username}!</p>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>

            <div>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
              />
            </div>

            <button type="submit" style={{ padding: '10px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Login
            </button>
          </form>

          <p style={{ marginTop: '15px' }}>
            <a href="/forgot-password" style={{ color: '#007BFF', textDecoration: 'none' }}>
              Forgot Password?
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
