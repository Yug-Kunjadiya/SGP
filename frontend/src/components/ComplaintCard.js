import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const statusColors = {
  accepted: '#4caf50', // green
  rejected: '#f44336', // red
  pending: '#ff9800',  // orange
};

const ComplaintCard = ({ complaint }) => {
  const status = complaint.status ? complaint.status.toLowerCase() : 'pending';
  const statusColor = statusColors[status] || '#757575'; // default grey

  return (
    <Card sx={{ marginBottom: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {complaint.complainantName}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {complaint.complaintType} - {new Date(complaint.fdate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          {complaint.description}
        </Typography>
        <Box sx={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', backgroundColor: statusColor, color: '#fff', fontWeight: 'bold' }}>
          {complaint.status ? complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1) : 'Pending'}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ComplaintCard;
