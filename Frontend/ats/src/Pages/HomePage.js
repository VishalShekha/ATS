import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Homepage() {
  const buttonStyle = {
    backgroundColor: '#FFFFFF',
    color: 'black',
    flex: 1,
    maxWidth: '45%',
    height: '120px',
    borderRadius: '10px',
    transition: 'transform 0.3s',
    fontSize: '18px',
    fontFamily: '"Roboto", sans-serif',
    textTransform: 'none',
    marginBottom: '20px',
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
          background: 'linear-gradient(to bottom, rgb(255, 255, 255), rgb(237, 227, 249))',
          width: '100%',
          marginTop: '20px',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          padding: '40px',
          height: '100%',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start', 
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Section - Buttons */}
        <div
          style={{
            flex: 1,
            textAlign: 'left',
            marginLeft: '230px', 
          }}
        >
          <Stack direction="column" spacing={2}>
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

        {/* Right Section - Image and Phrase */}
        <div
          style={{
            flex: 1,
            textAlign: 'left',
            marginLeft: '150px', 
            fontFamily: 'unset',
          }}
        >
          <h2 style={{ marginBottom: '20px', maxWidth: '50%' }}>
            "Filtering Out Humans, One Keyword at a Time."
          </h2>
          <img
            src="/recruitment.png"
            alt="Recruiting Visual"
            style={{
              maxWidth: '65%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
}
