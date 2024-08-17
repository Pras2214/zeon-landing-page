import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, styled, keyframes, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const GlassAppBar = styled(AppBar)(({ theme, isScrolled, isMobile }) => ({
  background: isScrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
  backdropFilter: isScrolled ? 'blur(10px)' : 'none',
  boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
  border: isScrolled?'1px solid rgba(255, 255, 255, 0.05)':'1px solid rgba(255, 255, 255, 0)',
  height: '64px',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: isScrolled && !isMobile? '16px' : 0,
  left: isScrolled && !isMobile ? '25%' : 0,
  width: isScrolled && !isMobile ? '50%' : '100%',
  maxWidth: '100%',
  borderRadius: isScrolled && !isMobile? '32px' : 0,
  transition: 'all 0.5s ease',
}));

const StyledToolbar = styled(Toolbar)(({ theme, isScrolled, isMobile }) => ({
  justifyContent: 'space-between',
  padding: isMobile ? '0 16px' : '0 24px',
  width: '100%',
}));

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BrandText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair", serif',
  background: 'white',
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 5s ease infinite`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
  fontSize: '2.5rem',
  marginRight: theme.spacing(2),
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const RollingTextContainer = styled(Box)({
  overflow: 'hidden',
  height: '1em',
  lineHeight: '1em',
});

const RollingText = styled(Box)(({ isHovered }) => ({
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
  '& > span': {
    height: '1em',
    lineHeight: '1em',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  background: 'transparent',
  color: 'white',
  marginLeft: theme.spacing(2),
  padding: '6px 8px',
  minWidth: 'auto',
  '& .MuiButton-endIcon': {
    marginLeft: theme.spacing(1),
  },
}));

const SignUpButton = styled(Button)(({ theme, isMobile }) => ({
  background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
  borderRadius: '28px',
  border: 0,
  color: 'white',
  height: '36px',
  padding: '0 16px',
  boxShadow: '0 3px 5px 2px rgba(99, 102, 241, 0.3)',
  marginLeft: !isMobile && theme.spacing(2),
  '&:hover': {
    background: 'linear-gradient(45deg, #8b5cf6 30%, #6366f1 90%)',
  },
}));

const SignUpRollingTextContainer = styled(Box)({
  overflow: 'hidden',
  height: '1em',
  lineHeight: '1em',
});

const SignUpRollingText = styled(Box)(({ isHovered }) => ({
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
  '& > span': {
    height: '1em',
    lineHeight: '1em',
    display: 'flex',
    alignItems: 'center',
  },
}));

function RollingButton({ children, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavButton
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RollingTextContainer>
        <RollingText isHovered={isHovered}>
          <span>{children}</span>
          <span>{children}</span>
        </RollingText>
      </RollingTextContainer>
    </NavButton>
  );
}

function SignUpRollingButton({ children, isMobile, onClick, ...props }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SignUpButton
      isMobile={isMobile}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <SignUpRollingTextContainer>
        <SignUpRollingText isHovered={isHovered}>
          <span>{children} <ArrowOutwardIcon fontSize="small" style={{ marginLeft: '4px' }} /></span>
          <span>{children} <ArrowOutwardIcon fontSize="small" style={{ marginLeft: '4px' }} /></span>
        </SignUpRollingText>
      </SignUpRollingTextContainer>
    </SignUpButton>
  );
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '250px',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    animation: `${slideIn} 0.3s forwards`,
  },
}));

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(1),
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.black,
}));

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1050);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const MobileMenu = () => (
    <StyledDrawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <DrawerHeader>
        <CloseButton onClick={() => setMobileMenuOpen(false)}>
          <CloseIcon />
        </CloseButton>
      </DrawerHeader>
      <List>
        {['Home', 'Use Cases', 'Features'].map((text) => (
          <ListItem button key={text} onClick={() => scrollToSection(text.toLowerCase().replace(' ', '-'))}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem>
          <SignUpRollingButton isMobile={isMobile} onClick={() => scrollToSection('cta')}>Sign Up</SignUpRollingButton>
        </ListItem>
      </List>
    </StyledDrawer>
  );

  return (
    <GlassAppBar position="fixed" isScrolled={isScrolled} isMobile={isMobile}>
    <StyledToolbar isMobile={isMobile} isScrolled={isScrolled}>
        <BrandText variant="h6" onClick={() => scrollToSection('hero')}>
          Zeon.
        </BrandText>
        {isMobile ? (
          <>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="menu" 
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon fontSize="large"/>
            </IconButton>
            <MobileMenu />
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <RollingButton onClick={() => scrollToSection('hero')}>Home</RollingButton>
            <RollingButton onClick={() => scrollToSection('use-cases')}>Use Cases</RollingButton>
            <RollingButton onClick={() => scrollToSection('features')}>Features</RollingButton>
            <SignUpRollingButton onClick={() => scrollToSection('cta')}>
              Sign Up
            </SignUpRollingButton>
          </Box>
        )}
      </StyledToolbar>
    </GlassAppBar>
  );
}

export default Navbar;