import React, { useState } from 'react';

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

            {/* Menu */}
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
