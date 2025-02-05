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
      <Typography variant="h5" className="requirement-title">
            Add Requirement
      </Typography>
      <div className="main-content">
        <Header />

        <div className="requirement-form">
          <form style={{ textAlign: 'left' }}>
            <div className="input-group">
              <TextField label="Requirement Name *" variant="outlined" className="input-field" />
              <FormControl className="select-field">
                <InputLabel>Client *</InputLabel>
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
              required
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
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn style={{ color: 'rgb(102, 76, 161)' }} />
                  </InputAdornment>
                ),
              }}
            />

            <div className="input-group">
              <FormControl className="select-field" required>
                <InputLabel>Job Workspace</InputLabel>
                <Select>
                  <MenuItem value="On-site">On-site</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="select-field" required>
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

            <div className="input-group">
              <TextField label="Skill Set" variant="outlined" className="skill-set-field" required />
              <FormControl className="recruiter-dropdown">
                <InputLabel>Recruiter</InputLabel>
                <Select>
                  <MenuItem value="Kishoth Kumar">Kishoth Kumar</MenuItem>
                  <MenuItem value="Sonali Sinha">Sonali Sinha</MenuItem>
                  <MenuItem value="Kaushal BA">Kaushal BA</MenuItem>
                  <MenuItem value="Ganesh Kumar">Ganesh Kumar</MenuItem>
                  <MenuItem value="Shruthi Ravikumar">Shruthi Ravikumar</MenuItem>
                  <MenuItem value="Aishwarya R">Aishwarya R</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="input-group">
              <FormControl className="select-field" required>
                <InputLabel>Experience Range</InputLabel>
                <Select>
                  <MenuItem value="1-2 Years">1-2 Years</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Maximum CTC" variant="outlined" className="input-field" required />
            </div>

            <div className="input-group">
              <TextField label="Hiring Manager Name" variant="outlined" className="input-field" required />
              <TextField label="Hiring Manager Mobile" variant="outlined" className="mobile-field" required />
            </div>

            <TextField label="Hiring Manager Email" variant="outlined" className="input-field" required />

            <div className="input-group">
              <FormControl className="select-field" required>
                <InputLabel>Account Owner</InputLabel>
                <Select>
                  <MenuItem value="Shefeedh Hamsa">Shefeedh Hamsa</MenuItem>
                  <MenuItem value="Vinayak">Vinayak</MenuItem>
                  <MenuItem value="Niveditha">Niveditha</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="select-field" required>
                <InputLabel>Account Manager</InputLabel>
                <Select>
                  <MenuItem value="Ganesh Kumar">Ganesh Kumar</MenuItem>
                </Select>
              </FormControl>
            </div>

            <FormControl className="status-field">
              <InputLabel>Status</InputLabel>
              <Select>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Hold">Hold</MenuItem>
                <MenuItem value="Closed">Closed</MenuItem>
              </Select>
            </FormControl>

            <div className="save-button-container">
              <Button 
                              variant="contained" 
                              className="save-button" 
                              startIcon={<CheckCircle />} 
                              onClick={() => {
                                alert("Saved Changes!");
                                window.location.href = "/viewRequirement"; 
                              }}
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
