import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  InputAdornment,
  Select,
  FormControl,
  InputLabel,
  IconButton
} from '@mui/material';
import { CheckCircle, Work, LocationOn, Edit } from '@mui/icons-material';
import Header from '../../Components/Header';
import Sidebar from '../../Components/AM_Sidebar';
import './CSS/AddRequirement.css';

export default function EditRequirement() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    requirementId: 'DTM00001',
    requirementName: 'Software Engineer',
    client: 'Client A',
    jobTitle: 'Frontend Developer',
    jobLocation: 'Bangalore',
    jobWorkspace: 'Remote',
    jobType: 'Full-Time',
    jobDescription: 'Develop and maintain frontend applications.',
    skillSet: 'React, JavaScript, HTML, CSS',
    status: 'Active',
    recruiter: 'Kishoth Kumar',
    experienceRange: '1-2 Years',
    maxCTC: '1500000',
    hiringManagerName: 'John Doe',
    hiringManagerMobile: '9876543210',
    hiringManagerEmail: 'johndoe@example.com',
    accountOwner: 'Shefeedh Hamsa',
    accountManager: 'Ganesh Kumar',
    createdDate: '2025-01-15',
    lastUpdatedDate: '2025-02-05'
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-requirement-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="page-header">
          <Typography variant="h5" className="requirement-title">
            View / Edit Requirement
            <IconButton onClick={handleEditToggle} style={{ marginLeft: '10px' }}>
              <Edit />
            </IconButton>
          </Typography>
        </div>

        <div className="requirement-form">
          <Typography variant="h6" className="requirement-id">
            Requirement ID: {formData.requirementId}
          </Typography>
          <Typography variant="body2" className="date-info">
            Created Date: {formData.createdDate} | Last Updated: {formData.lastUpdatedDate}
          </Typography>

          <form style={{ textAlign: 'left' }}>
            <div className="input-group">
              <TextField
                label="Requirement Name"
                variant="outlined"
                className="input-field"
                name="requirementName"
                value={formData.requirementName}
                onChange={handleChange}
                disabled={!isEditing}
                style={{marginTop:'20px'}}
              />
              <FormControl className="select-field" disabled={!isEditing} style={{marginTop:'20px'}}>
                <InputLabel>Client</InputLabel>
                <Select name="client" value={formData.client} onChange={handleChange}>
                  <MenuItem value="Client A">Client A</MenuItem>
                  <MenuItem value="Client B">Client B</MenuItem>
                </Select>
              </FormControl>
            </div>

            <TextField
              label="Job Title"
              variant="outlined"
              className="input-field"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              disabled={!isEditing}
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
              name="jobLocation"
              value={formData.jobLocation}
              onChange={handleChange}
              disabled={!isEditing}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn style={{ color: 'rgb(102, 76, 161)' }} />
                  </InputAdornment>
                ),
              }}
            />

            <div className="input-group">
              <FormControl className="select-field" disabled={!isEditing}>
                <InputLabel>Job Workspace</InputLabel>
                <Select name="jobWorkspace" value={formData.jobWorkspace} onChange={handleChange}>
                  <MenuItem value="On-site">On-site</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="select-field" disabled={!isEditing}>
                <InputLabel>Job Type</InputLabel>
                <Select name="jobType" value={formData.jobType} onChange={handleChange}>
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
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              disabled={!isEditing}
            />

            <TextField label="Skill Set" variant="outlined" name="skillSet" value={formData.skillSet} onChange={handleChange} disabled={!isEditing} style={{ width: '70%',marginBottom:'20px' }} />

            <TextField label="Experience Range" variant="outlined" name="experienceRange" value={formData.experienceRange} disabled={!isEditing} style={{ marginRight: '20px',marginBottom:'20px', width:'40%' }} />
            <TextField label="Maximum CTC" type="number" name="maxCTC" value={formData.maxCTC} disabled={!isEditing} style={{marginBottom:'20px', width:'40%'}} />

            <TextField label="Hiring Manager Name" name="hiringManagerName" value={formData.hiringManagerName} disabled={!isEditing} style={{ width: '40%',marginBottom:'20px', marginRight:'20px' }} />
            <TextField label="Hiring Manager Mobile" type="number" name="hiringManagerMobile" value={formData.hiringManagerMobile} disabled={!isEditing} style={{ width: '40%',marginBottom:'20px' }} />
            <TextField label="Hiring Manager Email" name="hiringManagerEmail" value={formData.hiringManagerEmail} disabled={!isEditing} style={{ width: '60%',marginBottom:'20px',marginRight:'40%' }} />

            <FormControl className="select-field" disabled={!isEditing}>
              <InputLabel>Status</InputLabel>
              <Select name="status" value={formData.status} onChange={handleChange}>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </Select>
            </FormControl>

            <div className="save-button-container">
              <Button 
                variant="contained" 
                className="save-button" 
                startIcon={<CheckCircle />} 
                disabled={!isEditing}
                onClick={() => {
                  alert("Saved Changes!");
                 handleEditToggle()
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
