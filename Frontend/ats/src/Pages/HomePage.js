import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Homepage() {
  const buttonStyle = {
    backgroundColor: '#FFFFFF', 
    color: '#000000', 
    flex: 1,
    maxWidth: '30%',
    height: '120px',
    borderRadius: '10px',
    transition: 'transform 0.3s',
    fontSize: '18px',
    fontFamily: '"Roboto", sans-serif',
    textTransform: 'none', 
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF', 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', 
        justifyContent: 'flex-start',
        position: 'relative',
         
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="Logo"
        style={{
          marginTop: '20px',
          width: '100px',
          height: 'auto',
        }}
      />

      {/* Box - Centered Content */}
      <div
        style={{
          background: 'linear-gradient(to bottom, #112E3E, #1A4C63)', 
          width: '100%', 
          maxWidth: '1200px', 
          marginTop: '20px',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          padding: '40px',
          textAlign: 'center',
          marginLeft: 'auto', 
          marginRight: 'auto', 
          height: '100%',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxSizing: 'border-box', 
        }}
      >
        {/* Buttons */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2}
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            startIcon={<AdminPanelSettingsIcon />}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Admin
          </Button>
          <Button
            variant="contained"
            startIcon={<WorkIcon />}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Recruiter
          </Button>
          <Button
            variant="contained"
            startIcon={<AccountCircleIcon />}
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Account Manager
          </Button>
        </Stack>
      </div>
    </div>
  );
}
