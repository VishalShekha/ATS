import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Homepage() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #112E3E, #1A4C63)', // Gradient background
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
      }}
    >
      {/* Logo */}
      <img
        src="/download.jpg"
        alt="Logo"
        style={{
          marginTop: '20px',
          width: '100px',
          height: 'auto',
        }}
      />

      {/* Box */}
      <div
        style={{
          backgroundColor: 'white',
          width: '80%',
          marginTop: '20px',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          padding: '40px',
          textAlign: 'center',
          height: '100%',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Buttons */}
        <Stack
          direction="row"
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
            style={{
              backgroundColor: '#112E3E',
              color: '#FFFFFF',
              flex: 1,
              maxWidth: '30%',
              height: '120px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              fontSize: '18px', // Improved font size
              fontFamily: '"Roboto", sans-serif', // Modern font
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Admin
          </Button>
          <Button
            variant="contained"
            startIcon={<WorkIcon />}
            style={{
              backgroundColor: '#112E3E',
              color: '#FFFFFF',
              flex: 1,
              maxWidth: '30%',
              height: '120px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              fontSize: '18px',
              fontFamily: '"Roboto", sans-serif',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Recruiter
          </Button>
          <Button
            variant="contained"
            startIcon={<AccountCircleIcon />}
            style={{
              backgroundColor: '#112E3E',
              color: '#FFFFFF',
              flex: 1,
              maxWidth: '30%',
              height: '120px',
              borderRadius: '10px',
              transition: 'transform 0.3s',
              fontSize: '18px',
              fontFamily: '"Roboto", sans-serif',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Account Manager
          </Button>
        </Stack>
      </div>
    </div>
  );
}
