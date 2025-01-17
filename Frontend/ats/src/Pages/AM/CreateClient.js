import React, { useState } from 'react';
import Header from '../../Components/Header';
import Sidebar from '../../Components/AM_Sidebar';

const CreateClient = () => {
  const [clientDetails, setClientDetails] = useState({
    clientName: '',
    contactPerson: '',
    emailId: '',
    contactNumber: '',
    industry: '',
    registeredAddress: '',
    gst: '',
    pan: '',
    clientLocations: '',
    otherNotes: '',
  });

  const [isIndustryOpen, setIndustryOpen] = useState(false);

  const styles = {
    buttonBox: {
      background: '#f5f5f5',
      width: '70%',
      maxWidth: '1200px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
      padding: '40px',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      marginTop: '0px',
    },
    formContainer: {
      width: '100%',
      maxWidth: '800px',
      backgroundColor: 'transparent',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      marginBottom: '20px',
    },
    formGroup: {
      flex: 1,
      textAlign: 'left',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#008080',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      minHeight: '80px',
    },
    select: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    submitButton: {
      padding: '10px 20px',
      backgroundColor: '#0066cc',
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientDetails({ ...clientDetails, [name]: value });
  };

  const toggleIndustryDropdown = () => {
    setIndustryOpen(!isIndustryOpen);
  };

  const handleIndustryChange = (e) => {
    setClientDetails({ ...clientDetails, industry: e.target.value });
    setIndustryOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client Details Submitted:', clientDetails);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div style={styles.buttonBox}>
        <div style={styles.formContainer}>
          <h1 style={{ color: '#000000' }}>Create Client</h1>
          <form onSubmit={handleSubmit}>
            {/* Client Name and Contact Person */}
            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Client Name *</label>
                <input
                  type="text"
                  name="clientName"
                  value={clientDetails.clientName}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Contact Person *</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={clientDetails.contactPerson}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div style={{ ...styles.formGroup, marginBottom: '20px', textAlign: 'left' }}>
              <label style={styles.label}>Email ID *</label>
              <input
                type="email"
                name="emailId"
                value={clientDetails.emailId}
                onChange={handleInputChange}
                style={{ ...styles.input, width: '70%' }}
                required
              />
            </div>

            {/* Contact Number and Industry */}
            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  value={clientDetails.contactNumber}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Industry *</label>
                <div
                  onClick={toggleIndustryDropdown}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                  }}
                >
                  {clientDetails.industry || 'Select Industry'}
                  {isIndustryOpen && (
                    <select
                      name="industry"
                      value={clientDetails.industry}
                      onChange={handleIndustryChange}
                      style={{
                        ...styles.select,
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        zIndex: 1,
                      }}
                      size={10}
                      onBlur={() => setIndustryOpen(false)}
                    >
                      <option value="Agriculture/Forestry/Fishing">Agriculture/Forestry/Fishing</option>
                  <option value="Meat and Minerals">Meat and Minerals</option>
                  <option value="Energy and Utilities">Energy and Utilities</option>
                  <option value="Construction - Industrial Facilities and Infrastructure">Construction - Industrial Facilities and Infrastructure</option>
                  <option value="Aerospace and Defense">Aerospace and Defense</option>
                  <option value="Automotive and Parts Mfg">Automotive and Parts Mfg</option>
                  <option value="Biotechnology/Pharmaceuticals">Biotechnology/Pharmaceuticals</option>
                  <option value="Chemicals/Petro-Chemicals">Chemicals/Petro-Chemicals</option>
                  <option value="Consumer Packaged Goods Manufacturing">Consumer Packaged Goods Manufacturing</option>
                  <option value="Electronics, Components, and Semiconductor Mfg">Electronics, Components, and Semiconductor Mfg</option>
                  <option value="Manufacturing - Other">Manufacturing - Other</option>
                  <option value="Printing and Publishing">Printing and Publishing</option>
                  <option value="Clothing and Textile Manufacturing">Clothing and Textile Manufacturing</option>
                  <option value="Wholesale Trade/Import-Export">Wholesale Trade/Import-Export</option>
                  <option value="Retail">Retail</option>
                  <option value="Travel, Transportation and Tourism">Travel, Transportation and Tourism</option>
                  <option value="Transport and Storage Minerals">Transport and Storage Minerals</option>
                  <option value="Internet Services">Internet Services</option>
                  <option value="Telecommunications Services">Telecommunications Services</option>
                  <option value="Banking">Banking</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Real Estate Property Management">Real Estate Property Management</option>
                  <option value="Rental Services">Rental Services</option>
                  <option value="Accounting and Auditing Services">Accounting and Auditing Services</option>
                  <option value="Architectural and Design Services">Architectural and Design Services</option>
                  <option value="Management Consulting Services">Management Consulting Services</option>
                  <option value="Computer Hardware">Computer Hardware</option>
                  <option value="Computer Software">Computer Software</option>
                  <option value="Legal Services">Legal Services</option>
                  <option value="Waste Management">Waste Management</option>
                  <option value="Education">Education</option>
                  <option value="Healthcare Services">Healthcare Services</option>
                  <option value="Performing and Fine Arts">Performing and Fine Arts</option>
                  <option value="Sports and Physical Recreation">Sports and Physical Recreation</option>
                  <option value="Hotels and Lodging">Hotels and Lodging</option>
                  <option value="Restaurant Food Services">Restaurant Food Services</option>
                  <option value="Staffing Employment Agencies">Staffing Employment Agencies</option>
                  <option value="Non Profit Charitable Organisations">Non Profit Charitable Organisations</option>
                  <option value="Personal and Household Services">Personal and Household Services</option>
                  <option value="Government and Military">Government and Military</option>
                  <option value="Security and Surveillance">Security and Surveillance</option>
                  <option value="Automotive Sales and Repair Services">Automotive Sales and Repair Services</option>
                  <option value="Business Services - Others">Business Services - Others</option>
                  <option value="Computer / IT Services">Computer / IT Services</option>
                  <option value="Construction Residential and Commercial Office">Construction Residential and Commercial Office</option>
                  <option value="Engineering Services">Engineering Services</option>
                  <option value="Entertainment Venues and Theaters">Entertainment Venues and Theaters</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Food and Beverage Production">Food and Beverage Production</option>
                  <option value="Marine Mfg & Services">Marine Mfg & Services</option>
                  <option value="Medical Devices and Supplies">Medical Devices and Supplies</option>
                  <option value="Other / Not Classified">Other / Not Classified</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Courier">Courier</option>
                  <option value="Beauty and Personal Care">Beauty and Personal Care</option>
                  <option value="FMCG">FMCG</option>
                  <option value="Fitness and Wellness">Fitness and Wellness</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Edtech">Edtech</option>

                      {/* Add more options as needed */}
                    </select>
                  )}
                </div>
              </div>
            </div>

            {/* GST and PAN */}
            <div style={styles.row}>
              <div style={styles.formGroup}>
                <label style={styles.label}>GST</label>
                <input
                  type="text"
                  name="gst"
                  value={clientDetails.gst}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>PAN</label>
                <input
                  type="text"
                  name="pan"
                  value={clientDetails.pan}
                  onChange={handleInputChange}
                  style={styles.input}
                />
              </div>
            </div>

            {/* Registered Address */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Client's Registered Address</label>
              <textarea
                name="registeredAddress"
                value={clientDetails.registeredAddress}
                onChange={handleInputChange}
                style={styles.textarea}
              />
            </div>

            {/* Client Locations */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Client Locations</label>
              <input
                type="text"
                name="clientLocations"
                value={clientDetails.clientLocations}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>

            {/* Other Notes */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Other Notes</label>
              <textarea
                name="otherNotes"
                value={clientDetails.otherNotes}
                onChange={handleInputChange}
                style={styles.textarea}
              />
            </div>

            {/* Save Button */}
            <button type="submit" style={styles.submitButton}>
              <span>💾</span>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
