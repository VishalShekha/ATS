import React from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';

export default function App() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #112E3E, #1A4C63)',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Login Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '400px',
          padding: '40px',
          paddingTop: '20px', // Adjust top padding for logo placement
          borderRadius: '20px',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Logo */}
        <img
          src="https://via.placeholder.com/50" // Replace with your logo URL
          alt="Logo"
          style={{
            position: 'absolute',
            top: '10px',
            left: '20px',
            width: '50px',
            height: '50px',
            borderRadius: '5px',
          }}
        />

        {/* Title */}
        <Typography
          variant="h5"
          style={{
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '30px',
            marginTop: '50px', // Adjust for logo space
          }}
        >
          AM Login
        </Typography>

        {/* Email Field */}
        <TextField
          label="Email ID"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email style={{ color: '#1A4C63' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          style={{ marginBottom: '10px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock style={{ color: '#1A4C63' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Remember Me and Forgot Password */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography style={{ fontSize: '14px' }}>Remember me</Typography>}
          />
          <Typography
            style={{
              color: '#3D5965',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Forgot Password?
          </Typography>
        </div>

        {/* Login Button */}
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: '#1A4C63',
            color: '#FFFFFF',
            height: '50px',
            borderRadius: '25px',
            fontSize: '16px',
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
