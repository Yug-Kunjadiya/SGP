import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { blue, green, yellow } from '@mui/material/colors';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import SecurityIcon from '@mui/icons-material/Security';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import IPCCrimeChart from './components/IPCCrimeChart';

const featureData = [
  {
    key: 'police',
    title: 'For Police Officers',
    desc: 'Register complaints, upload evidence, and forward cases to judges efficiently.',
    button: 'Register Complaint',
    color: blue[500],
    icon: <SecurityIcon sx={{ fontSize: 48, color: blue[700], mb: 1 }} />,
    onClick: (setSelectedMenu) => setSelectedMenu('manageComplaint'),
    modalContent: (
      <>
        <Typography variant="body1" gutterBottom>Police officers can:</Typography>
        <ul style={{ marginLeft: 20, marginBottom: 16 }}>
          <li>Register new complaints</li>
          <li>Upload evidence and documents</li>
          <li>Forward cases to judges efficiently</li>
        </ul>
        <Typography variant="subtitle1" sx={{ color: blue[700], fontWeight: 600 }}>Empowering law enforcement with digital tools.</Typography>
      </>
    )
  },
  {
    key: 'judges',
    title: 'For Judges',
    desc: 'Review FIRs, approve or reject cases, and assign necessary actions.',
    button: 'Review FIRs',
    color: green[500],
    icon: <GavelIcon sx={{ fontSize: 48, color: green[700], mb: 1 }} />,
    onClick: (setSelectedMenu) => setSelectedMenu('manageCourtDetails'),
    modalContent: (
      <>
        <Typography variant="body1" gutterBottom>Judges can:</Typography>
        <ul style={{ marginLeft: 20, marginBottom: 16 }}>
          <li>Review and manage FIRs</li>
          <li>Approve or reject cases</li>
          <li>Assign necessary actions for resolution</li>
        </ul>
        <Typography variant="subtitle1" sx={{ color: green[700], fontWeight: 600 }}>Ensuring justice with efficiency and transparency.</Typography>
      </>
    )
  },
  {
    key: 'citizens',
    title: 'For Citizens',
    desc: 'File FIRs, track case status, and receive updates on your complaints.',
    button: 'File FIR',
    color: yellow[700],
    icon: <GroupsIcon sx={{ fontSize: 48, color: yellow[800], mb: 1 }} />,
    onClick: (setSelectedMenu) => setSelectedMenu('manageComplaint'),
    modalContent: (
      <>
        <Typography variant="body1" gutterBottom>Citizens can:</Typography>
        <ul style={{ marginLeft: 20, marginBottom: 16 }}>
          <li>File new FIRs online</li>
          <li>Track the status of their cases</li>
          <li>Receive timely updates and notifications</li>
        </ul>
        <Typography variant="subtitle1" sx={{ color: yellow[800], fontWeight: 600 }}>Making justice accessible for everyone.</Typography>
      </>
    )
  }
];

const VisitMainSite = ({ setSelectedMenu }) => {
  const [modal, setModal] = useState(null);

  return (
    <>
      {/* Header */}
      <Box sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        background: 'rgba(30, 41, 59, 0.85)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 1.5,
        boxShadow: '0 2px 12px 0 #1e293b33',
        pr: 6,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <SecurityIcon sx={{ fontSize: 36, color: '#38bdf8', mr: 1 }} />
          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800, letterSpacing: 1 }}>
            E-FIR
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0, whiteSpace: 'nowrap', maxWidth: { xs: '40vw', md: '300px' }, textOverflow: 'ellipsis', overflow: 'hidden' }}>
          <GavelIcon sx={{ fontSize: 28, color: '#facc15' }} />
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, letterSpacing: 0.5 }}>
            Empowering Justice
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ width: '100vw', minHeight: '100vh', background: 'linear-gradient(135deg, #2563eb 0%, #1e293b 100%)', pt: 10, display: 'flex', flexDirection: 'column', flexGrow: 1, px: 0, position: 'relative', overflow: 'hidden' }}>
        
        {/* Background */}
        <Box sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          opacity: 0.18,
          filter: 'blur(3px)',
          pointerEvents: 'none',
        }}>
          <img
            src="https://www.vibesofindia.com/wp-content/uploads/2022/07/E-Fir.jpg"
            alt="Justice background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', mb: 2, textShadow: '0 2px 16px #1e293b' }}>
            Justice at Your Fingertips
          </Typography>
          <Typography variant="h6" sx={{ color: '#dbeafe', mb: 4, maxWidth: 700, mx: 'auto', textShadow: '0 1px 8px #1e293b' }}>
            File and track FIRs online seamlessly. Empowering faster resolution, transparency, and accountability in your community.
          </Typography>
          <GavelIcon sx={{ fontSize: 80, color: '#38bdf8', mb: 2, mt: 1, filter: 'drop-shadow(0 4px 24px #1e293b66)' }} />
        </Box>

        {/* Why Choose E-FIR Section */}
        <Box sx={{ my: 6, px: 2 }}>
          <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, mb: 3, textAlign: 'center', letterSpacing: 1 }}>
            Why Choose E-FIR?
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4 }}>
            <Box sx={{ maxWidth: 260, p: 3, borderRadius: 4, background: 'rgba(255,255,255,0.13)', boxShadow: 2, textAlign: 'center', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.18)' }}>
              <SecurityIcon sx={{ fontSize: 40, color: '#38bdf8', mb: 1 }} />
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>Secure & Transparent</Typography>
              <Typography sx={{ color: '#dbeafe', fontSize: '1rem' }}>All your data is encrypted and accessible only to authorized users.</Typography>
            </Box>
            <Box sx={{ maxWidth: 260, p: 3, borderRadius: 4, background: 'rgba(255,255,255,0.13)', boxShadow: 2, textAlign: 'center', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.18)' }}>
              <GavelIcon sx={{ fontSize: 40, color: '#facc15', mb: 1 }} />
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>Fast Resolution</Typography>
              <Typography sx={{ color: '#dbeafe', fontSize: '1rem' }}>Cases move quickly from filing to resolution, reducing delays.</Typography>
            </Box>
            <Box sx={{ maxWidth: 260, p: 3, borderRadius: 4, background: 'rgba(255,255,255,0.13)', boxShadow: 2, textAlign: 'center', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.18)' }}>
              <GroupsIcon sx={{ fontSize: 40, color: '#22c55e', mb: 1 }} />
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, mb: 1 }}>Accessible to All</Typography>
              <Typography sx={{ color: '#dbeafe', fontSize: '1rem' }}>Citizens, police, and judges can access the system anytime, anywhere.</Typography>
            </Box>
          </Box>
        </Box>

        {/* Feature Panels */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 1, mb: 3, position: 'relative', zIndex: 2, px: 1 }}>
          {featureData.map((feature, idx) => (
            <Box key={feature.key} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Colored Glow Behind Card */}
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 220,
                height: 140,
                borderRadius: 8,
                filter: 'blur(24px)',
                opacity: 0.35,
                zIndex: 0,
                transform: 'translate(-50%, -50%)',
                background: idx === 0
                  ? 'radial-gradient(circle, #3b82f6 0%, transparent 70%)'
                  : idx === 1
                  ? 'radial-gradient(circle, #22c55e 0%, transparent 70%)'
                  : 'radial-gradient(circle, #f59e42 0%, transparent 70%)'
              }} />
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.18), 0 1.5px 6px rgba(0,0,0,0.08)',
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  minWidth: 220,
                  maxWidth: 340,
                  minHeight: 160,
                  transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s',
                  cursor: 'pointer',
                  transform: 'perspective(900px) rotateY(0deg) scale(1)',
                  '&:hover': {
                    transform: 'perspective(900px) rotateY(6deg) scale(1.04)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.22), 0 4px 16px rgba(0,0,0,0.12)',
                    background: 'rgba(255,255,255,0.24)',
                  },
                  position: 'relative',
                  overflow: 'visible',
                  zIndex: 1,
                  m: 'auto'
                }}
                onClick={() => setModal(feature)}
              >
                <CardContent sx={{ textAlign: 'center', pb: 1, px: 1 }}>
                  {/* Icon with 3D Circle Background */}
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 48,
                    height: 48,
                    mx: 'auto',
                    mb: 1,
                    borderRadius: '50%',
                    boxShadow: `0 2px 8px 0 ${feature.color}33, 0 1.5px 6px rgba(0,0,0,0.08)`,
                    background: `linear-gradient(135deg, ${feature.color}22 0%, #fff 100%)`,
                    border: `2px solid ${feature.color}33`,
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: feature.color, mb: 1, letterSpacing: 0.5 }}>{feature.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#222', mb: 1 }}>{feature.desc}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 1 }}>
                  <Button
                    variant="contained"
                    sx={{
                      background: feature.color,
                      color: '#fff',
                      fontWeight: 700,
                      borderRadius: 2,
                      px: 2,
                      fontSize: '0.95rem',
                      boxShadow: `0 1px 6px 0 ${feature.color}33`,
                      '&:hover': { background: feature.color }
                    }}
                    onClick={e => { e.stopPropagation(); feature.onClick(setSelectedMenu); }}
                  >
                    {feature.button}
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
        </Box>

        {/* How E-FIR Works Section */}
        <Box sx={{ mt: 3, mb: 2, px: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: '#fff', mb: 3, textAlign: 'center', textShadow: '0 2px 16px #1e293b' }}>
            How E-FIR Works
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 4, background: 'linear-gradient(135deg, #dbeafe 0%, #fff 100%)', p: 1, maxWidth: 340, minWidth: 220, m: 'auto' }}>
              <CardContent sx={{ textAlign: 'center', px: 1, py: 2 }}>
                <InfoIcon sx={{ fontSize: 32, color: blue[500], mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: blue[700], mb: 1 }}>1. File a Complaint</Typography>
                <Typography variant="body2" sx={{ color: '#222' }}>
                  Police officers enter case details and submit FIRs online.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ borderRadius: 3, boxShadow: 4, background: 'linear-gradient(135deg, #dcfce7 0%, #fff 100%)', p: 1, maxWidth: 340, minWidth: 220, m: 'auto' }}>
              <CardContent sx={{ textAlign: 'center', px: 1, py: 2 }}>
                <GavelIcon sx={{ fontSize: 32, color: green[500], mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: green[700], mb: 1 }}>2. Judicial Review</Typography>
                <Typography variant="body2" sx={{ color: '#222' }}>
                  Judges examine FIRs, approve or reject cases.
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ borderRadius: 3, boxShadow: 4, background: 'linear-gradient(135deg, #fef9c3 0%, #fff 100%)', p: 1, maxWidth: 340, minWidth: 220, m: 'auto' }}>
              <CardContent sx={{ textAlign: 'center', px: 1, py: 2 }}>
                <GroupsIcon sx={{ fontSize: 32, color: yellow[800], mb: 1 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: yellow[800], mb: 1 }}>3. Case Resolution</Typography>
                <Typography variant="body2" sx={{ color: '#222' }}>
                  Approved cases proceed to legal action or resolution.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* IPC Crime Chart Section */}
        <Box sx={{ my: 4, px: 2, maxWidth: 600, mx: 'auto' }}>
          <IPCCrimeChart />
        </Box>

        {/* Support Section */}
        <Box sx={{ mb: 3, px: 1 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 6, background: 'linear-gradient(135deg, #e0e7ff 0%, #fff 100%)', p: 2, maxWidth: 340, minWidth: 220, m: 'auto' }}>
            <CardContent sx={{ textAlign: 'center', px: 1, py: 2 }}>
              <SupportAgentIcon sx={{ fontSize: 32, color: blue[500], mb: 1 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: blue[700], mb: 1 }}>Need Help or Support?</Typography>
              <Typography variant="body2" sx={{ color: '#222', mb: 1 }}>
                Our support team is here to assist you. Contact us anytime for help with your FIRs or system issues.
              </Typography>
              <Button
                variant="contained"
                sx={{ background: blue[500], color: '#fff', fontWeight: 700, borderRadius: 2, px: 2, fontSize: '0.95rem', boxShadow: 1, '&:hover': { background: blue[700] } }}
                onClick={() => window.location.href = 'mailto:support@example.com'}
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </Box>

        {/* Modal Popup */}
        <Dialog
          open={!!modal}
          onClose={() => setModal(null)}
          maxWidth="xs"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 5,
              background: 'linear-gradient(135deg, #e0e7ff 0%, #fff 100%)',
              boxShadow: '0 0 60px 10px #3b82f6, 0 8px 32px rgba(0,0,0,0.18)',
              border: `3px solid ${modal?.color || blue[500]}`,
              zIndex: 1401,
              animation: 'fadeInModal 0.25s',
            }
          }}
          sx={{
            zIndex: 1400,
            '& .MuiBackdrop-root': {
              background: 'rgba(16,30,60,0.85)',
              backdropFilter: 'blur(2px)',
            }
          }}
        >
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, fontWeight: 700, color: modal?.color }}>
            {modal?.icon}
            {modal?.title}
            <Button onClick={() => setModal(null)} sx={{ ml: 'auto', minWidth: 0, color: modal?.color }}><CloseIcon /></Button>
          </DialogTitle>
          <DialogContent dividers>
            {modal?.modalContent}
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              sx={{ background: modal?.color, color: '#fff', fontWeight: 700, borderRadius: 3, px: 4, boxShadow: 2 }}
              onClick={() => { modal?.onClick(setSelectedMenu); setModal(null); }}
            >
              {modal?.button}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default VisitMainSite;
