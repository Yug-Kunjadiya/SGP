import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function FilterMenu({ anchorEl, open, onClose, onSelect }) {
  const handleSelect = (filterType) => {
    onSelect(filterType);
    onClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <MenuItem onClick={() => handleSelect('all')}>All Complaints</MenuItem>
      <MenuItem onClick={() => handleSelect('name')}>Name Wise</MenuItem>
      <MenuItem onClick={() => handleSelect('date')}>Date Wise</MenuItem>
      <MenuItem onClick={() => handleSelect('type')}>Complaint Type Wise</MenuItem>
      <MenuItem onClick={() => handleSelect('status_accepted')}>Status: Accepted</MenuItem>
      <MenuItem onClick={() => handleSelect('status_rejected')}>Status: Rejected</MenuItem>
    </Menu>
  );
}
