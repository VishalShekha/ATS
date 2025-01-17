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
  Checkbox,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Email, Person, CalendarToday, CheckCircle, Work, LocationOn, Description } from '@mui/icons-material';

export default function AddRequirement() {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #112E3E, #1A4C63)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      {/* Add Requirement Form */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          width: '800px',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        {/* Main Title */}
        <Typography
          variant="h5"
          style={{
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '30px',
          }}
        >
          Add Requirement
        </Typography>

        <form style={{ textAlign: 'left' }}>
          {/* Field: Client */}
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Client</InputLabel>
            <Select>
              <MenuItem value="Client A">Client A</MenuItem>
              <MenuItem value="Client B">Client B</MenuItem>
            </Select>
          </FormControl>

          {/* Field: Client ID (Read Only) */}
          <TextField
            label="Client ID"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
            InputProps={{ readOnly: true }}
          />

          {/* Field: Requirement Name */}
          <TextField
            label="Requirement Name"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
          />

          {/* Field: Requirement ID (Read Only) */}
          <TextField
            label="Requirement ID"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
            InputProps={{ readOnly: true }}
          />

          {/* Field: Job Title */}
          <TextField
            label="Job Title"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work style={{ color: '#1A4C63' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Field: Job Location */}
          <TextField
            label="Job Location"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn style={{ color: '#1A4C63' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Dropdown: Job Workspace */}
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Job Workspace</InputLabel>
            <Select>
              <MenuItem value="On-site">On-site</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
            </Select>
          </FormControl>

          {/* Dropdown: Job Type */}
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Job Type</InputLabel>
            <Select>
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
            </Select>
          </FormControl>

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
                  <Description style={{ color: '#1A4C63' }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Calendar Field: Requirement Created Date */}
          <DatePicker
            label="Requirement Created Date"
            renderInput={(props) => (
              <TextField
                {...props}
                fullWidth
                style={{ marginBottom: '20px' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarToday style={{ color: '#1A4C63' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />

          {/* Field: Skill Set */}
          <TextField
            label="Skill Set"
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px' }}
          />

          {/* Add Other Fields Here... */}

          {/* Dropdown: Status */}
          <FormControl fullWidth style={{ marginBottom: '20px' }}>
            <InputLabel>Status</InputLabel>
            <Select>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Hold">Hold</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </Select>
          </FormControl>

          {/* Save Button */}
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
            startIcon={<CheckCircle />}
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
