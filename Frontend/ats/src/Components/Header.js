import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <button onClick={goBack} style={styles.goBackButton}>
      {/* U-turn like arrow symbol */}
      <span style={styles.icon}>↩</span>
    </button>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={styles.header}>
      {/* Logo */}
      <div style={styles.logo}>
        <img
          src="/logo.png" 
          alt="Logo"
          style={styles.logoImage}
        />
      </div>

      {/* Right Side (Go Back Button & Menu) */}
      <div style={styles.rightContainer}>
        {/* Go Back Button */}
        <GoBackButton />
        
        {/* Menu Button */}
        <div style={styles.menuContainer}>
          <button onClick={toggleMenu} style={styles.menuButton}>
            ☰
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div style={styles.dropdownMenu}>
              <button style={styles.menuItem}>View Profile</button>
              <button style={styles.menuItem}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: 'white',
    color: '#fff',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    width: 'auto',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  goBackButton: {
    fontSize: '20px', // Adjust size of the icon
    background: 'none',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
    marginRight: '20px', // Spacing between Go Back and Menu button
  },
  icon: {
    fontSize: '24px', // Size of the icon
  },
  menuContainer: {
    position: 'relative',
  },
  menuButton: {
    fontSize: '20px',
    background: 'none',
    color: 'black',
    border: 'none',
    cursor: 'pointer',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '40px',
    right: '0',
    background: '#fff',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 100,
  },
  menuItem: {
    display: 'block',
    width: '150px',
    padding: '10px',
    textAlign: 'left',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
  },
};

export default Header;
