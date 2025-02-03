// Homepage.js
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WorkIcon from '@mui/icons-material/Work';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './CSS/HomePage.css';

export default function Homepage() {
  return (
    <div className="homepage-container">
      {/* Purple Area */}
      <div className="header">
        <img src="/Logo-bg.png" alt="Logo" className="logo" />
      </div>

      {/* White Area */}
      <div className="content">
        {/* Left Section - Buttons */}
        <div className="button-container">
          <Stack direction="column" spacing={2}>
            <Button variant="contained" startIcon={<AdminPanelSettingsIcon />} className="custom-button">
              Admin
            </Button>
            <Button variant="contained" startIcon={<WorkIcon />} className="custom-button">
              Recruiter
            </Button>
            <Button variant="contained" startIcon={<AccountCircleIcon />} className="custom-button">
              Account Manager
            </Button>
          </Stack>
        </div>

        {/* Right Section - Image and Phrase */}
        <div className="text-image-container">
          <h1 className="title">"Filtering Out Humans, <br /><br />One Keyword at a Time..."</h1>
          <img src="/recruitment.png" alt="Recruiting Visual" className="image" />
        </div>
      </div>
    </div>
  );
}
