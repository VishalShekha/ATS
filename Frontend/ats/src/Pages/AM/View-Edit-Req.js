import React, { useState, useEffect } from 'react';
import { FaFilter, FaSort } from 'react-icons/fa';
import Header from '../../Components/Header';
import Sidebar from '../../Components/AM_Sidebar';

const RequirementsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [requirementsData, setRequirementsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchJSONData = async () => {
      try {
        const res = await fetch('/Data.json'); 
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data); 
        
        const extractedData = data.RequirementDetails.map(item => ({
          RequirementID: item.RequirementID,
          RequirementName: item.RequirementName,
          JobTitle: item.JobTitle,
          ReqCreatedDate: item.ReqCreatedDate,
          Status: item.Status,
        }));

        setRequirementsData(extractedData);
      } catch (error) {
        console.error("Unable to fetch data:", error);
      }
    };

    fetchJSONData();
  }, []);

  const filteredData = requirementsData.filter((item) =>
    item.RequirementID?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.RequirementName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.JobTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.ReqCreatedDate?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.Status?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Inactive':
        return 'red';
      case 'Hold':
        return 'blue';
      default:
        return 'black';
    }
  };

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
          boxSizing: 'border-box',
          maxHeight: 'calc(100vh - 160px)',  
          overflowY: 'auto',  
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
              <button style={{
                padding: '10px 15px',
                marginLeft: '10px',
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: '1px solid #ccc',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}>
                <FaFilter /> Filter
              </button>
              <button style={{
                padding: '10px 15px',
                marginLeft: '10px',
                borderRadius: '4px',
                backgroundColor: '#f0f0f0',
                color: '#333',
                border: '1px solid #ccc',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}>
                <FaSort /> Sort
              </button>
            </div>
          </div>

          {/* Table */}
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgb(116, 81, 171)', color: 'white' }}>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left', width: '15%' }}>Requirement ID</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Requirement Name</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Job Title</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Requirement Created Date</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.length > 0 ? (
                currentData.map((item, index) => (
                  <tr key={item.RequirementID} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                      <a href={`/requirements/${item.RequirementID}`} style={{ color: 'blue', textDecoration: 'underline' }}>
                        {item.RequirementID}
                      </a>
                    </td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.RequirementName}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.JobTitle}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.ReqCreatedDate}</td>
                    <td style={{ padding: '10px', borderBottom: '1px solid #ddd', color: getStatusColor(item.Status) }}>
                      {item.Status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '10px', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              style={{ padding: '10px 15px', marginRight: '10px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
            >
              Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              style={{ padding: '10px 15px', marginLeft: '10px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsPage;
