import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Homepage() {
  const buttonStyle = {
    backgroundColor:'rgb(115, 49, 202)', 
    color: 'white', 
    flex: 1,
    maxWidth: '200px',
    height: '60px',
    fontSize: '16px',
    fontFamily: '"Roboto", sans-serif',
    textTransform: 'none',
    marginBottom: '20px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    border: '2px solid transparent', 
    transition: 'background-color 0.3s, color 0.3s, border 0.3s', 
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = '#FFFFFF'; 
    e.currentTarget.style.color = 'rgb(115, 49, 202)'; 
    e.currentTarget.style.border = '2px solid rgb(115, 49, 202)'; 
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = 'rgb(115, 49, 202)'; 
    e.currentTarget.style.color = '#FFFFFF'; 
    e.currentTarget.style.border = '2px solid transparent'; 
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Purple Area */}
      <div
        style={{
          background: 'linear-gradient(to right,  rgb(112, 80, 207), rgba(156, 99, 241, 0.86))',
          height: '10%',
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          zIndex: '10',
        }}
      >
        <img
          src="/Logo-bg.png"
          alt="Logo"
          style={{
            width: '100px',
            height: 'auto',
          }}
        />
      </div>

      {/* White Area */}
      <div
        style={{
          backgroundColor: 'white',
          marginTop: '7%',
          height: '90%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '40px',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Section - Buttons */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <h2 style={{ marginBottom: '20px', maxWidth: '80%', fontSize: '20px' }}>
            "Filtering Out Humans, One Keyword at a Time..."
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
