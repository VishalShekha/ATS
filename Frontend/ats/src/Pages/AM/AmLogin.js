import React from 'react';
import { TextField, Button, Typography, Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import Header from '../../Components/Header';
import './CSS/AmLogin.css';  

export default function App() {
  return (
    <div className="login-container">
      {/* Header */}
      <Header />
      
      {/* Login Card */}
      <div className="login-card">
        {/* Title */}
        <Typography variant="h5" className="login-title">
          AM Login
        </Typography>

        {/* Email Field */}
        <TextField
          label="Email ID"
          variant="outlined"
          
          className="input-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email className="icon" />
              </InputAdornment>
            ),
          }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          
          className="input-field"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock className="icon" />
              </InputAdornment>
            ),
          }}
        />

        {/* Remember Me and Forgot Password */}
        <div className="remember-forgot">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography className="checkbox-label">Remember me</Typography>}
          />
          <Typography className="forgot-password">
            Forgot Password?
          </Typography>
        </div>

        {/* Login Button */}
        <Button variant="contained" className="login-button">
          Login
        </Button>
      </div>
    </div>
  );
}
