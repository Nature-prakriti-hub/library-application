import React from 'react';

const Header = () => (
  <>
    <header style={styles.header}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>LIBWORLD</h1>
        <p style={styles.tagline}>Your Gateway to the World of Books</p>
      </div>
    </header>
    {/* <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="#categories" style={styles.navLink}>Categories</a></li>
        <li style={styles.navItem}><a href="#cart" style={styles.navLink}>Cart</a></li>
        <li style={styles.navItem}><a href="#signin" style={styles.navLink}>Sign In</a></li>
        <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Us</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact Us</a></li>
      </ul>
    </nav> */}
  </>
);

const styles = {
  header: {
    backgroundImage: 'url(/images/city.jpg)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: 'white',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    padding: '20px',
    borderRadius: '10px',
  },
  title: {
    fontSize: '3rem',
    margin: '0',
    color: '#FFD700', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  },
  tagline: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    margin: '10px 0 0',
    color: '#FFFFFF',
  },
  navbar: {
    backgroundColor: '#333', 
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '300px', 
    width: '100%',
    zIndex: '1000',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    listStyle: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    padding: '10px 15px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#FFD700',
  },
};

export default Header;
