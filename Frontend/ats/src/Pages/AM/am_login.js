import React from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import Header from '../../Components/Header';

export default function App() {
  return (
    <div
      style={{
        background: '#f5f5f5',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header */}
      <Header />
      
      {/* Login Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '400px',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          marginTop: '150px',
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          style={{
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '30px',
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
                <Email style={{ color:'rgb(101, 64, 161)' }} />
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
                <Lock style={{ color: 'rgb(101, 64, 161)' }} />
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
              color: 'rgb(101, 64, 161)',
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
            backgroundColor: 'rgb(101, 64, 161)',
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
