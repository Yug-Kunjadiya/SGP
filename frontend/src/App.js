import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ComplaintCard from './components/ComplaintCard';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FilterMenu from './components/FilterMenu';
import VisitMainSite from './VisitMainSite';
import { Routes, Route } from 'react-router-dom';
import PoliceLoginPage from './pages/PoliceLoginPage';

function App() {
  const [complaints, setComplaints] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('visitSite');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((data) => {
        setComplaints(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleFilterSelect = (type) => {
    setFilterType(type);
    setFilterAnchorEl(null);
  };

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      (complaint.complainantName && complaint.complainantName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (complaint.complaintType && complaint.complaintType.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (complaint.status && complaint.status.toLowerCase().includes(searchTerm.toLowerCase()));

    if (!filterType) {
      return matchesSearch;
    }

    switch (filterType) {
      case 'all':
        return true;
      case 'name':
        return complaint.complainantName && complaint.complainantName.toLowerCase().includes(searchTerm.toLowerCase());
      case 'date':
        // Assuming complaint has a date field 'fdate' in ISO format
        return complaint.fdate && complaint.fdate.includes(searchTerm);
      case 'type':
        return complaint.complaintType && complaint.complaintType.toLowerCase().includes(searchTerm.toLowerCase());
      case 'status_accepted':
        return complaint.status && complaint.status.toLowerCase() === 'accepted';
      case 'status_rejected':
        return complaint.status && complaint.status.toLowerCase() === 'rejected';
      default:
        return matchesSearch;
    }
  });

  const sortedComplaints = React.useMemo(() => {
    if (filterType === 'name') {
      return [...filteredComplaints].sort((a, b) => a.complainantName.localeCompare(b.complainantName));
    }
    if (filterType === 'date') {
      return [...filteredComplaints].sort((a, b) => new Date(a.fdate) - new Date(b.fdate));
    }
    if (filterType === 'type') {
      return [...filteredComplaints].sort((a, b) => a.complaintType.localeCompare(b.complaintType));
    }
    return filteredComplaints;
  }, [filteredComplaints, filterType]);

  function RenderContent({ selectedMenu, setSelectedMenu, searchTerm, setSearchTerm, filterAnchorEl, handleFilterClick, handleFilterClose, handleFilterSelect, sortedComplaints }) {
    switch (selectedMenu) {
      case 'dashboard':
        return <Dashboard />;
      case 'manageComplaint':
        return (
          <Box>
            <h1>Manage Complaints</h1>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <TextField
                label="Search complaints"
                variant="outlined"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ flexGrow: 1, marginRight: '8px' }}
              />
              <button
                onClick={handleFilterClick}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Filter Options
              </button>
              <FilterMenu
                anchorEl={filterAnchorEl}
                open={Boolean(filterAnchorEl)}
                onClose={handleFilterClose}
                onSelect={handleFilterSelect}
              />
            </div>
            {sortedComplaints.map((complaint) => (
              <ComplaintCard key={complaint._id} complaint={complaint} />
            ))}
          </Box>
        );
      case 'manageCourtDetails':
        return (
          <div>
            <h1>Manage Court Details</h1>
            <p>Feature coming soon.</p>
          </div>
        );
      case 'managePendingComplaints':
        return <></>;
      case 'visitSite':
        return <VisitMainSite setSelectedMenu={setSelectedMenu} />;
      default:
        return <></>;
    }
  }

  return (
    <div className="app-background" style={{ display: 'flex' }}>
      {selectedMenu !== 'visitSite' && <Sidebar onSelect={setSelectedMenu} />}
      <main
        style={{
          marginRight: selectedMenu !== 'visitSite' ? '240px' : 0,
          padding: '20px',
          width: selectedMenu !== 'visitSite' ? 'calc(100% - 260px)' : '100%'
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <RenderContent
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterAnchorEl={filterAnchorEl}
                handleFilterClick={handleFilterClick}
                handleFilterClose={handleFilterClose}
                handleFilterSelect={handleFilterSelect}
                sortedComplaints={sortedComplaints}
              />
            }
          />
          <Route path="/login/police" element={<PoliceLoginPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
