import React, { useState, useEffect } from 'react';
import { FaFilter, FaSort } from 'react-icons/fa';
import Header from '../../Components/Header';
import Sidebar from '../../Components/AM_Sidebar';
import data from '../Data.json'; 

const RequirementsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [requirementsData, setRequirementsData] = useState([]);

 
  useEffect(() => {
    console.log(data); 
    const extractedData = data.RequirementDetails.map(item => ({
      RequirementID: item.RequirementID,
      RequirementName: item.RequirementName,
      JobTitle: item.JobTitle,
      ReqCreatedDate: item.ReqCreatedDate,
      Status: item.Status
    }));
    setRequirementsData(extractedData); 
  }, []);

  
  const filteredData = requirementsData.filter((item) =>
    item.RequirementID?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.RequirementName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.JobTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.ReqCreatedDate?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.Status?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      <div style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '20px', position: 'absolute', left: '60px', right: '0' }}>
        {/* Header */}
        <Header />

        <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
          <h1>Requirements</h1>
        </div>

        {/* White Box with Search Bar, Filter, and Sort buttons */}
        <div style={{
          backgroundColor: 'white',
          padding: '20px',
          marginTop: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
          height: 'calc(100vh - 160px)', 
          boxSizing: 'border-box',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: '10px',
                  width: '100%',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
            </div>
            <div>
              <button
                style={{
                  padding: '10px 15px',
                  marginLeft: '10px',
                  borderRadius: '4px',
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              >
                <FaFilter /> Filter
              </button>
              <button
                style={{
                  padding: '10px 15px',
                  marginLeft: '10px',
                  borderRadius: '4px',
                  backgroundColor: '#f0f0f0',
                  color: '#333',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              >
                <FaSort /> Sort
              </button>
            </div>
          </div>

          {/* Table */}
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Requirement ID</th>
                <th>Requirement Name</th>
                <th>Job Title</th>
                <th>Requirement Created Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.RequirementID}>
                    <td>
                      <a href={`/requirements/${item.RequirementID}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                        {item.RequirementID}
                      </a>
                    </td>
                    <td>{item.RequirementName}</td>
                    <td>{item.JobTitle}</td>
                    <td>{item.ReqCreatedDate}</td>
                    <td>{item.Status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage;
