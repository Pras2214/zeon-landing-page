import React from 'react';
import { styled, Box, keyframes } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import { Meteors } from "./Meteors.jsx"
import Hero from './Hero';
import UseCases from './UseCases';
import Features from './Features';
import CTA from './CTA';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glowAnimation = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
`;

const GradientBackground = styled(Box)({
  background: 'linear-gradient(-45deg, #000000, #050510, #0a0a20, #0f0f30)',
  backgroundSize: '400% 400%',
  animation: `${backgroundAnimation} 15s ease infinite`,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
});

const GlowingBlob = styled(Box)({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(80px)',
  animation: `${glowAnimation} 4s infinite alternate`,
  zIndex: 0,
});

const Divider = styled(Box)({
  width: '100%',
  height: '1px',
  background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent)',
  margin: '64px 0',
});

function LandingPage() {
  return (
    <GradientBackground>
      <Navbar />
      <GlowingBlob 
        sx={{ 
          top: '10%', 
          left: '10%', 
          width: '300px', 
          height: '300px', 
          background: 'rgba(99, 102, 241, 0.3)' 
        }} 
      />
      <GlowingBlob 
        sx={{ 
          top: '30%', 
          left: '30%', 
          width: '200px', 
          height: '200px', 
          background: 'rgba(167, 139, 250, 0.3)' 
        }} 
      />
      <GlowingBlob 
        sx={{ 
          top: '60%', 
          right: '10%', 
          width: '250px', 
          height: '250px', 
          background: 'rgba(139, 92, 246, 0.3)' 
        }} 
      />
      <GlowingBlob 
        sx={{ 
          bottom: '10%', 
          left: '30%', 
          width: '200px', 
          height: '200px', 
          background: 'rgba(167, 139, 250, 0.3)' 
        }} 
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Box id="home">
          <Hero />
        </Box>
        <Divider />
        <Box id="use-cases">
          <UseCases />
        </Box>
        <Divider />
        <Box id="features">
          <Features />
        </Box>
        <Divider />
        <Box id="cta">
          <CTA />
        </Box>
      </Box>
      <Meteors number={15}/>
      <Footer />
    </GradientBackground>
  );
}

export default LandingPage;