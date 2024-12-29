import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#444',
      color: '#fff',
      padding: '10px',
      textAlign: 'center',
      zIndex: 1000,
    },
  };

  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 LIBWORLD</p>
    </footer>
  );
};

export default Footer;