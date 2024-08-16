import React, { useState } from 'react';
import { styled, Box, Container, Typography, Button } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

const HeroSection = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const GlassCard = styled(Box)({
  background: 'rgba(28,28,39,0.8)',
  borderRadius: '24px',
  padding: '48px',
  width: '100%',
  maxWidth: '800px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(8px)',
  textAlign: 'left',
  paddinTop: '32px'
});

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '28px',
  padding: '12px 24px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '18px',
  background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
  border: 0,
  color: 'white',
  height: '56px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #8b5cf6 30%, #6366f1 90%)',
    boxShadow: '0 3px 5px 2px rgba(99, 102, 241, 0.3)',
    transform: 'translateY(-2px)',
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
  transform: isHovered ? 'translateY(-57%)' : 'translateY(0)',
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
    <StyledButton
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RollingTextContainer>
        <RollingText isHovered={isHovered}>
          <span>{children} <ArrowOutwardIcon fontSize="small" style={{ marginLeft: '4px' }} /></span>
          <span>{children} <ArrowOutwardIcon fontSize="small" style={{ marginLeft: '4px' }} /></span>
        </RollingText>
      </RollingTextContainer>
    </StyledButton>
  );
}

function Hero() {
  return (
    <HeroSection id="hero">
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', maxWidth: '800px' }}>
          <GlassCard>
            <Typography variant="h1" component="h1" sx={{ color: 'white', mb: 3, fontWeight: 700, fontSize: { xs: '3rem', md: '4rem' }, lineHeight: 1.2, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Discover What Matters, Skip the Noise
            </Typography>
            <Typography variant="h4" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 5, fontWeight: 400, fontSize: { xs: '1.5rem', md: '2rem' } }}>
              Curate, Connect, and create with Zeon's intelligent content management
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <RollingButton
                variant="contained"
                size="large"
                onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Early Access
              </RollingButton>
            </Box>
          </GlassCard>
        </Box>
      </Container>
    </HeroSection>
  );
}

export default Hero;