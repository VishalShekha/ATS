import * as React from 'react';
import { TextField, Button, Typography } from '@mui/material';

export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#112E3E',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        style={{
          fontWeight: 'bold',
          color: '#FFFFFF',
          marginBottom: '20px',
        }}
      >
        AM Login
      </Typography>

      {/* Login Box */}
      <div
        style={{
          backgroundColor: '#DDD0C8',
          width: '80%',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          textAlign: 'center',
        }}
      >
        {/* Username Field */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          style={{ marginBottom: '20px' }}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          style={{ marginBottom: '20px' }}
        />

        {/* Login Button */}
        <Button
          variant="contained"
          style={{
            backgroundColor: '#112E3E',
            color: '#FFFFFF',
            width: '100%',
            height: '50px',
            borderRadius: '10px',
            fontSize: '16px',
            transition: 'transform 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
