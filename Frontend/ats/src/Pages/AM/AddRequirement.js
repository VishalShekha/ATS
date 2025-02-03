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
import './CSS/AddRequirement.css';

export default function AddRequirement() {
  return (
    <div className="add-requirement-container">
      <Sidebar />
      <div className="main-content">
        <Header />

        <div className="requirement-form">
          <Typography variant="h5" className="requirement-title">
            Add Requirement
          </Typography>

          <form style={{ textAlign: 'left' }}>
            <div className="input-group">
              <TextField label="Requirement Name" variant="outlined" className="input-field" />
              <FormControl className="select-field">
                <InputLabel>Client</InputLabel>
                <Select>
                  <MenuItem value="Client A">Client A</MenuItem>
                  <MenuItem value="Client B">Client B</MenuItem>
                </Select>
              </FormControl>
            </div>

            <TextField
              label="Job Title"
              variant="outlined"
              className="input-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Work style={{ color: 'rgb(102, 76, 161)' }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Job Location"
              variant="outlined"
              className="input-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn style={{ color: 'rgb(102, 76, 161)' }} />
                  </InputAdornment>
                ),
              }}
            />

            <div className="input-group">
              <FormControl className="select-field">
                <InputLabel>Job Workspace</InputLabel>
                <Select>
                  <MenuItem value="On-site">On-site</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="select-field">
                <InputLabel>Job Type</InputLabel>
                <Select>
                  <MenuItem value="Full-Time">Full-Time</MenuItem>
                  <MenuItem value="Part-Time">Part-Time</MenuItem>
                </Select>
              </FormControl>
            </div>

            <TextField
              label="Job Description"
              variant="outlined"
              className="full-width"
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

            <TextField label="Skill Set" variant="outlined" className="full-width" />

            <FormControl className="full-width">
              <InputLabel>Status</InputLabel>
              <Select>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Hold">Hold</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
              </Select>
            </FormControl>

            <div className="save-button-container">
              <Button variant="contained" className="save-button" startIcon={<CheckCircle />}>
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
