import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/amlogin"); 
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
          src="/Logo-bg.png" 
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
    background: 'linear-gradient(to right,  rgb(112, 80, 207), rgba(156, 99, 241, 0.86))',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    position: 'fixed', 
    top: '0',
    left: '0',
    width: '100%',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    zIndex: '1100', // Set zIndex to ensure header is above the sidebar
  },
  logo: {
    flex: 1, 
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    width: '150px',
    height: 'auto',
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  goBackButton: {
    fontSize: '20px',
    background: 'none',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    marginRight: '20px', 
  },
  icon: {
    fontSize: '24px', 
  },
  menuContainer: {
    position: 'relative',
  },
  menuButton: {
    fontSize: '20px',
    background: 'none',
    color: 'white',
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
  content: {
    paddingTop: '60px', 
    boxSizing: 'border-box',
  },
};

const App = () => (
  <>
    <Header />
  </>
);

export default App;
