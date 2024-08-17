import React, { useState } from 'react';
import { styled, Box, Container, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';
import { FlipWords } from './UI/FlipWords';

const HeroSection = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
});

const StyledButton = styled(motion.button)({
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
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #8b5cf6 30%, #6366f1 90%)',
    boxShadow: '0 3px 5px 2px rgba(99, 102, 241, 0.3)',
  },
  marginTop:"20px",
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #a0a0ff 0%, #ffffff 60%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const GradientFlipWords = styled(FlipWords)({
  fontFamily: '"Playfair Display", serif',
  background: 'linear-gradient(45deg, #a0a0ff 0%, #ffffff 60%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const RollingTextContainer = styled(Box)({
  overflow: 'hidden',
  height: '1em',
  lineHeight: '1em',
});

const RollingText = styled(Box)(({ isHovered }) => ({
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  transform: isHovered ? 'translateY(-51%)' : 'translateY(0)',
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
          <span>{children}</span>
          <span>{children}</span>
        </RollingText>
      </RollingTextContainer>
    </StyledButton>
  );
}

function Hero() {
  const rollingTexts = ['Content Creators.', 'Community Builders.', 'Professionals.', 'You.'];

  return (
    <HeroSection id="hero">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GradientText
              variant="h1"
              component="h1"
              sx={{
                mb: 0,
                fontWeight: 700,
                fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                lineHeight: 1.2,
              }}
            >
              Zeon is for
            </GradientText>
            <Box sx={{ 
              minHeight: '1.2em',
            }}>
              <GradientFlipWords 
                words={rollingTexts} 
                duration={3000} 
                sx={{
                  mb:1.5,
                  fontWeight: 700,
                  fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                  lineHeight: 1.2,
                }}
              />
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h4"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 400,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                maxWidth: '800px',
                margin: '0',
                textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)',
              }}
            >
              Get relevant content delivered to your inbox
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <RollingButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('cta').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Early Access <ArrowOutwardIcon fontSize="small" style={{ marginLeft: '4px' }} />
            </RollingButton>
          </motion.div>
        </Box>
      </Container>
    </HeroSection>
  );
}

export default Hero;