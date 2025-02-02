import React from 'react';
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { CheckCircle, Email, Home, Business, Note } from '@mui/icons-material';
import Header from '../../Components/Header';
import Sidebar from '../../Components/AM_Sidebar';

export default function AddClient() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5', position:'absolute',left:'0px',right:'0px',marginLeft:'-50px' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Header />

        {/* Add Client Form */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            width: '80%',
            maxWidth: '800px',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            marginTop: '100px',
          }}
        >
          {/* Main Title */}
          <Typography variant="h5" style={{ fontWeight: 'bold', color: '#333333', marginBottom: '30px' }}>
            Create Client
          </Typography>

          <form style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <TextField label="Client Name *" variant="outlined" fullWidth />
              <TextField label="Contact Person *" variant="outlined" fullWidth />
            </div>
            <TextField
              label="Email ID *"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '20px', width: '60%' }}
              InputProps={{ startAdornment: <Email style={{ marginRight: '10px' }} /> }}
            />

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <TextField label="Contact Number" variant="outlined" fullWidth />
              <FormControl fullWidth>
                <InputLabel>Industry *</InputLabel>
                <Select>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="Finance">Finance</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                  <MenuItem value="Meat and Minerals">Meat and Minerals</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <TextField label="GST" variant="outlined" fullWidth />
              <TextField label="PAN" variant="outlined" fullWidth />
            </div>

            <TextField
              label="Client's Registered Address"
              variant="outlined"
              multiline
              rows={2}
              style={{ marginBottom: '20px', width: '60%' }}
              InputProps={{ startAdornment: <Home style={{ marginRight: '10px' }} /> }}
            />

            <TextField
              label="Client Locations"
              variant="outlined"
              style={{ marginBottom: '20px', width: '60%' }}
              InputProps={{ startAdornment: <Business style={{ marginRight: '10px' }} /> }}
            />

            <TextField
              label="Other Notes"
              variant="outlined"
              multiline
              rows={2}
              style={{ marginBottom: '20px', width: '60%' }}
              InputProps={{ startAdornment: <Note style={{ marginRight: '10px' }} /> }}
            />

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: 'rgb(102, 76, 161)',
                  color: '#FFFFFF',
                  height: '50px',
                  borderRadius: '25px',
                  fontSize: '16px',
                  width: '60%',
                }}
                startIcon={<CheckCircle />}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
