import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GavelIcon from '@mui/icons-material/Gavel';
import LanguageIcon from '@mui/icons-material/Language';

const drawerWidth = 240;

const Sidebar = ({ onSelect }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#2c3e50',
          color: '#ecf0f1',
        },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2 }}>
        Menu
      </Typography>
      <Divider />
      <List>
        <ListItem button onClick={() => onSelect('dashboard')}>
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => onSelect('manageComplaint')}>
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Complaint" />
        </ListItem>
        <ListItem button onClick={() => onSelect('manageCourtDetails')}>
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <GavelIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Court Details" />
        </ListItem>
        <ListItem button onClick={() => onSelect('visitSite')}>
          <ListItemIcon sx={{ color: '#ecf0f1' }}>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Visit Site (Main Site)" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
