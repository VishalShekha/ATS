import React from 'react';
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  InputAdornment,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { CheckCircle, Work, LocationOn, Description } from '@mui/icons-material';
import Header from '../../Components/Header';
import Sidebar from '../../Components/AM_Sidebar';

export default function AddRequirement() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5', position:'absolute',left:'0px',right:'0px',marginLeft:'-50px' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Header />

        {/* Add Requirement Form */}
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
            Add Requirement
          </Typography>

          <form style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {/* Field: Requirement Name (60%) */}
              <TextField label="Requirement Name" variant="outlined" style={{ width: '60%' }} />

              {/* Field: Client Dropdown (30%) */}
              <FormControl style={{ width: '30%' }}>
                <InputLabel>Client</InputLabel>
                <Select>
                  <MenuItem value="Client A">Client A</MenuItem>
                  <MenuItem value="Client B">Client B</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Field: Job Title (60%) */}
            <TextField
              label="Job Title"
              variant="outlined"
              style={{ width: '60%', marginBottom: '20px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Work style={{ color: 'rgb(102, 76, 161)' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Field: Job Location (60%) */}
            <TextField
              label="Job Location"
              variant="outlined"
              style={{ width: '60%', marginBottom: '20px' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn style={{ color: 'rgb(102, 76, 161)' }} />
                  </InputAdornment>
                ),
              }}
            />

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {/* Dropdown: Job Workspace (50%) */}
              <FormControl style={{ width: '50%' }}>
                <InputLabel>Job Workspace</InputLabel>
                <Select>
                  <MenuItem value="On-site">On-site</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </FormControl>

              {/* Dropdown: Job Type (50%) */}
              <FormControl style={{ width: '50%' }}>
                <InputLabel>Job Type</InputLabel>
                <Select>
                  <MenuItem value="Full-Time">Full-Time</MenuItem>
                  <MenuItem value="Part-Time">Part-Time</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* Field: Job Description with Attachment */}
            <TextField
              label="Job Description"
              variant="outlined"
              fullWidth
              style={{ marginBottom: '20px' }}
              multiline
              rows={3}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Description style={{ color: 'rgb(102, 76, 161)' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Field: Skill Set */}
            <TextField label="Skill Set" variant="outlined" fullWidth style={{ marginBottom: '20px' }} />

            {/* Dropdown: Status */}
            <FormControl fullWidth style={{ marginBottom: '20px' }}>
              <InputLabel>Status</InputLabel>
              <Select>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Hold">Hold</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
              </Select>
            </FormControl>

            {/* Save Button (60%) */}
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
