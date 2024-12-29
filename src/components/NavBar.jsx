import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navStyle = {
    background: '#444',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    position: 'absolute',
    top: '150px', // Adjust based on header height
    width: '100%',
    zIndex: 1000,
  };

  const linkStyle = {
    margin: '0 10px',
    color: 'white',
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#555',
  };

  const dropdownStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const dropdownContentStyle = {
    display: dropdownOpen ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: '#444',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  };

  const dropdownLinkStyle = {
    color: 'white',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Home</Link>
      <Link to="/aboutus" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>About Us</Link>
      <Link to="/categories" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Categories</Link>
      <Link to="/cart" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Cart</Link>
      <div style={dropdownStyle} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
        <span style={linkStyle}>Sign-Up</span>
        <div style={dropdownContentStyle}>
          <Link to="/signin" style={dropdownLinkStyle}>Sign-In</Link>
          <Link to="/login" style={dropdownLinkStyle}>Login</Link>
        </div>
      </div>
     
      <Link to="/contactus" style={linkStyle} onMouseOver={(e) => e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor} onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}>Contact Us</Link>
    </nav>
  );
};

export default Navbar;