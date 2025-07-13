import React, { useState, useEffect, useRef } from 'react';
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
import BalanceIcon from '@mui/icons-material/Balance';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import VanillaTilt from 'vanilla-tilt';

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Adjust threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const efirLogoRef = useRef();
  const cardRefs = useRef([]);
  const leftBtnRef = useRef();
  const rightBtnRef = useRef();

  // useEffect(() => {
  //   if (efirLogoRef.current) {
  //     VanillaTilt.init(efirLogoRef.current, {
  //       max: 18,
  //       speed: 400,
  //       glare: true,
  //       'max-glare': 0.18,
  //       scale: 1.08,
  //     });
  //   }
  //   cardRefs.current.forEach((el) => {
  //     if (el) {
  //       VanillaTilt.init(el, {
  //         max: 16,
  //         speed: 350,
  //         glare: true,
  //         'max-glare': 0.12,
  //         scale: 1.04,
  //       });
  //     }
  //   });
  //   // 3D press effect for scroll buttons
  //   [leftBtnRef.current, rightBtnRef.current].forEach((btn) => {
  //     if (btn) {
  //       btn.addEventListener('mousedown', () => btn.style.transform = 'scale(0.92)');
  //       btn.addEventListener('mouseup', () => btn.style.transform = 'scale(1)');
  //       btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
  //     }
  //   });
  //   return () => {
  //     if (efirLogoRef.current && efirLogoRef.current.vanillaTilt) efirLogoRef.current.vanillaTilt.destroy();
  //     cardRefs.current.forEach((el) => {
  //       if (el && el.vanillaTilt) el.vanillaTilt.destroy();
  //     });
  //     [leftBtnRef.current, rightBtnRef.current].forEach((btn) => {
  //       if (btn) {
  //         btn.removeEventListener('mousedown', () => btn.style.transform = 'scale(0.92)');
  //         btn.removeEventListener('mouseup', () => btn.style.transform = 'scale(1)');
  //         btn.removeEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
  //       }
  //     });
  //   };
  // }, []);

  // Add VanillaTilt 3D effect to feature panels
  // useEffect(() => {
  //   if (window.featurePanelRefs) {
  //     window.featurePanelRefs.forEach((el) => {
  //       if (el) {
  //         VanillaTilt.init(el, {
  //           max: 6,
  //           speed: 350,
  //           glare: true,
  //           'max-glare': 0.05,
  //           scale: 1.01,
  //         });
  //       }
  //     });
  //   }
  //   return () => {
  //     if (window.featurePanelRefs) {
  //       window.featurePanelRefs.forEach((el) => {
  //         if (el && el.vanillaTilt) el.vanillaTilt.destroy();
  //       });
  //     }
  //   };
  // }, []);

  return (
    <>
      {/* Header */}
      <Box sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        background: scrolled
          ? 'rgba(255, 255, 255, 0.15)'
          : 'rgba(255, 255, 255, 0.15)',
        backdropFilter: scrolled ? 'blur(0.25px)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 1.5,
        boxShadow: '0 2px 12px 0 #1e293b33',
        pr: 6,
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, position: 'relative' }}>
          <Box
            sx={{
              height: 60, // visually larger logo
              width: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              ml: -1, // pull left a bit if needed
              mr: 1, // space to text
              mt: -1, // pull up a bit to keep header height
              mb: -1, // pull down a bit to keep header height
              zIndex: 1,
            }}
          >
            <img
              src="/digital-nyay-logo.png"
              alt="Digital Nyay Logo"
              style={{
                height: '100%',
                width: 'auto',
                maxWidth: 60,
                maxHeight: 60,
                display: 'block',
                objectFit: 'contain',
                background: 'transparent',
              }}
            />
          </Box>
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
      <Box sx={{ width: '100%', minHeight: '100vh', pt: 10, display: 'flex', flexDirection: 'column', flexGrow: 1, px: 0, position: 'relative', overflowX: 'hidden', maxWidth: '100vw' }}>
        
        {/* Background Image */}
        <Box sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 0,
          opacity: 10,
          pointerEvents: 'none',
        }}>
          <img
            src="/law-bg.jpg"
            alt="Justice background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        {/* White Blur Overlay */}
        <Box sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 1,
          background: 'rgba(255,255,255,0.08)',
          pointerEvents: 'none',
        }} />

        {/* Main Content Wrapper for Visibility */}
        <Box sx={{
          position: 'relative',
          zIndex: 2,
          background: 'rgba(255,255,255,0.12)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          backdropFilter: 'blur(2px)',
          borderRadius: 18,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          overflow: 'hidden',
          mx: { xs: 0, md: 4 },
          my: { xs: 0, md: 4 },
          px: { xs: 0, md: 4 },
          py: { xs: 0, md: 0 },
         
        }}>
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h2" sx={{ fontWeight: 800, color: '#fff', mb: 2, textShadow: '0 2px 16px #1e293b' }}>
                    Nyay Ab Door Nahi...           </Typography>
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

          {/* Feature Panels Section (with 3D Tilt Effect) */}
          <Box sx={{ my: 10, px: { xs: 1, md: 4 }, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, justifyContent: 'center', alignItems: 'stretch', width: '100%', maxWidth: 1200 }}>
              {[{
                key: 'police',
                title: 'For Police Officers',
                desc: 'Register complaints, upload evidence, and forward cases to judges efficiently.',
                button: 'REGISTER COMPLAINT',
                color: '#2196f3',
                icon: <SecurityIcon sx={{ fontSize: 56, color: '#2196f3', mb: 1 }} />,
              }, {
                key: 'judges',
                title: 'For Judges',
                desc: 'Review FIRs, approve or reject cases, and assign necessary actions.',
                button: 'REVIEW FIRS',
                color: '#22c55e',
                icon: <GavelIcon sx={{ fontSize: 56, color: '#22c55e', mb: 1 }} />,
              }, {
                key: 'citizens',
                title: 'For Citizens',
                desc: 'File FIRs, track case status, and receive updates on your complaints.',
                button: 'FILE FIR',
                color: '#facc15',
                icon: <GroupsIcon sx={{ fontSize: 56, color: '#facc15', mb: 1 }} />,
              }].map((feature, i) => (
                <Box
                  key={feature.key}
                  ref={el => {
                    if (!window.featurePanelRefs) window.featurePanelRefs = [];
                    window.featurePanelRefs[i] = el;
                  }}
                  sx={{
                    flex: 1,
                    minWidth: 280,
                    maxWidth: 380,
                    background: 'rgba(30, 64, 175, 0.18)',
                    borderRadius: 6,
                    boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
                    border: `2.5px solid ${feature.color}55`,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  {feature.icon}
                  <Typography variant="h5" sx={{ fontWeight: 700, color: feature.color, mb: 1, textAlign: 'center' }}>{feature.title}</Typography>
                  <Typography sx={{ color: '#222', fontSize: '1.08rem', mb: 3, textAlign: 'center' }}>{feature.desc}</Typography>
                  <Button
                    variant="contained"
                    sx={{
                      background: feature.color,
                      color: '#fff',
                      fontWeight: 700,
                      borderRadius: 2,
                      px: 3,
                      fontSize: '1rem',
                      boxShadow: `0 1px 6px 0 ${feature.color}33`,
                      '&:hover': { background: feature.color },
                    }}
                  >
                    {feature.button}
                  </Button>
                </Box>
              ))}
            </Box>
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

          {/* Statistics Section */}
          <StatsSection />

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
      </Box>
      {/* Footer Section */}
      <FooterSection />
    </>
  );
};

// --- Statistics Section Component ---
const statsData = [
  {
    icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#2563eb' }} />,
    label: 'High Courts',
    value: 25,
    suffix: '',
  },
  {
    icon: <GavelIcon sx={{ fontSize: 40, color: '#22c55e' }} />,
    label: 'District & Sessions Courts',
    value: 700,
    suffix: '+',
  },
  {
    icon: <BalanceIcon sx={{ fontSize: 40, color: '#f59e42' }} />,
    label: 'Civil Judge Courts',
    value: 4000,
    suffix: '+',
  },
  {
    icon: <LocalPoliceIcon sx={{ fontSize: 40, color: '#0ea5e9' }} />,
    label: 'Criminal Magistrate Courts',
    value: 4500,
    suffix: '+',
  },
  {
    icon: <StarIcon sx={{ fontSize: 40, color: '#facc15' }} />,
    label: 'Special Courts',
    value: 1000,
    suffix: '+',
  },
  {
    icon: <FamilyRestroomIcon sx={{ fontSize: 40, color: '#a21caf' }} />,
    label: 'Family Courts',
    value: 800,
    suffix: '+',
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 40, color: '#0f766e' }} />,
    label: 'Total Court Units',
    value: 12000,
    suffix: '+',
  },
];

const useCountUp = (end, inView, duration = 1800) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [inView, end]);
  return count;
};

const StatsSection = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current || inView) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        setInView(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]);

  return (
    <Box ref={ref} sx={{
      width: '100%',
      py: { xs: 4, md: 6 },
      px: { xs: 1, md: 4 },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.18)',
      borderRadius: 6,
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
      mb: 4,
      mt: 2,
      position: 'relative',
      zIndex: 2,
    }}>
      <Typography variant="h4" sx={{ fontWeight: 800, color: '#222', mb: 4, letterSpacing: 1, textAlign: 'center', fontFamily: 'inherit' }}>
        Court Statistics
      </Typography>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
        gap: { xs: 2, sm: 3, md: 4 },
        width: '100%',
        maxWidth: 1100,
        justifyContent: 'center',
      }}>
        {statsData.map((stat, idx) => {
          const count = useCountUp(stat.value, inView, 1600 + idx * 200);
          return (
            <Box
              key={stat.label}
              sx={{
                background: '#fff',
                borderRadius: 4,
                boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.10)',
                p: { xs: 2.5, md: 3 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 180,
                maxWidth: 240,
                m: 'auto',
                transition: 'transform 0.18s, box-shadow 0.18s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.04)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                },
              }}
            >
              <Box sx={{ mb: 1.5 }}>{stat.icon}</Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  color: theme.palette.primary.main,
                  fontFamily: 'inherit',
                  mb: 0.5,
                  lineHeight: 1.1,
                  letterSpacing: 1,
                  textShadow: '0 2px 8px #e0e7ff',
                }}
              >
                {count.toLocaleString()}{stat.suffix}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#222',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  letterSpacing: 0.2,
                  mt: 0.5,
                  fontFamily: 'inherit',
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

// --- Footer Section Component ---

const footerLinks = [
  {
    title: 'E-FIR LINKS',
    items: [
      'Home',
      'Dashboard',
      'File FIR',
      'Track Case',
      'Support',
      'About',
      'Privacy Policy',
    ],
  },
  {
    title: 'E-FIR FEATURES',
    items: [
      'Online FIR Filing',
      'Real-time Case Tracking',
      'Secure Evidence Upload',
      'Judicial Review',
      'Notifications & Updates',
      'Multi-role Access',
    ],
  },
  {
    title: 'CONTACT & SUPPORT',
    items: [
      'Email: support@efir.gov.in',
      'Helpline: 1800-123-456',
      'Office: 123 Justice Ave, New Delhi',
    ],
  },
];

const socialIcons = [
  { icon: <LinkedInIcon sx={{ fontSize: 32, color: '#fff' }} />, bg: '#0A66C2', href: '#' },
  { icon: <TwitterIcon sx={{ fontSize: 32, color: '#fff' }} />, bg: '#1DA1F2', href: '#' },
  { icon: <EmailIcon sx={{ fontSize: 32, color: '#fff' }} />, bg: '#D93025', href: '#' },
];

const FooterSection = () => (
  <Box
    sx={{
      width: '100%',
      background: 'rgba(24, 24, 72, 0.85)',
      color: '#fff',
      pt: 6,
      pb: 2,
      px: { xs: 2, md: 8 },
      mt: 6,
      position: 'relative',
      zIndex: 10,
      overflow: 'hidden',
    }}
  >
    {/* Dotted World Map Background (SVG) */}
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.10,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ minHeight: 300 }}>
        <defs>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#fff" fillOpacity="0.18" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </Box>
    {/* eFIR System Info */}
    <Box sx={{ textAlign: 'center', mb: 4, zIndex: 2, position: 'relative', maxWidth: 900, mx: 'auto' }}>
      <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.25rem', mb: 1 }}>
        About the E-FIR System
      </Typography>
      <Typography sx={{ color: '#e0e7ff', fontWeight: 400, fontSize: '1.05rem' }}>
        E-FIR is a digital platform designed to simplify and accelerate the process of filing First Information Reports, tracking case progress, and ensuring transparency in the justice system. Our mission is to empower citizens, police, and judiciary with secure, accessible, and efficient tools for a better legal experience.
      </Typography>
    </Box>
    <Box
      sx={{
        position: 'relative',
        zIndex: 2,
        maxWidth: 1200,
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center',
        gap: { xs: 4, md: 8 },
        mb: 3,
      }}
    >
      {footerLinks.map((col) => (
        <Box key={col.title} sx={{ minWidth: 180 }}>
          <Typography sx={{ fontWeight: 800, fontSize: '1.15rem', mb: 2, letterSpacing: 0.5, color: '#fff' }}>
            {col.title}
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
            {col.items.map((item) => (
              <li key={item}>
                <Typography sx={{ color: '#e0e7ff', fontSize: '1rem', mb: 0.5, fontWeight: 400, cursor: 'pointer', '&:hover': { color: '#facc15' } }}>{item}</Typography>
              </li>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
    <Box sx={{ textAlign: 'center', mb: 2, zIndex: 2, position: 'relative' }}>
      <Typography sx={{ color: '#fff', fontWeight: 400, mb: 1, fontSize: '1.1rem' }}>
        Empowering justice through technology. Your safety, our priority.
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2, zIndex: 2, position: 'relative' }}>
      <Typography sx={{ color: '#fff', fontWeight: 700, mr: 1, fontSize: '1.1rem' }}>FOLLOW US ON:</Typography>
      {socialIcons.map((soc, idx) => (
        <Box
          key={idx}
          component="a"
          href={soc.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: soc.bg,
            boxShadow: '0 2px 8px 0 #0004',
            mx: 0.5,
          }}
        >
          {soc.icon}
        </Box>
      ))}
    </Box>
    <Box sx={{ textAlign: 'center', color: '#e0e7ff', fontSize: '0.95rem', zIndex: 2, position: 'relative', mt: 1 }}>
      © {new Date().getFullYear()} E-FIR System. All rights reserved.
    </Box>
  </Box>
);

export default VisitMainSite;
