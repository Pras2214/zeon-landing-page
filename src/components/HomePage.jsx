import React, { useState } from 'react';
import { styled, Box, Container, Button, Typography } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const GlassCardWrapper = styled(Box)({
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const GlassCard = styled(Box)({
  background: 'rgba(90, 90, 90, 0.25)',
  borderRadius: '24px',
  padding: '48px',
  width: '100%',
  maxWidth: '600px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(8px)',
});

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '28px',
  padding: '12px 24px',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '16px',
  background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
  border: 0,
  color: 'white',
  minWidth: '180px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #8b5cf6 30%, #6366f1 90%)',
    boxShadow: '0 3px 5px 2px rgba(99, 102, 241, 0.3)',
  },
}));

const HighlightedText = styled(Typography)(({ theme }) => ({
  color: 'rgba(255,255,255,0.8)',
  display: 'inline-block',
  fontSize: '14px',
  letterSpacing: 1,
  padding: '6px 0',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '2px',
    background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
  },
}));

const ContentContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '24px',
  position: 'relative',
  zIndex: 1,
});

const RollingTextContainer = styled(Box)({
  height: '24px',
  overflow: 'hidden',
});

const RollingText = styled(Box)(({ isHovered }) => ({
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  transform: isHovered ? 'translateY(-50%)' : 'translateY(0)',
  '& > span': {
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ContentContainer maxWidth="lg">
      <GlassCardWrapper>
        <GlassCard>
          <HighlightedText variant="underline" component="span">
            LAUNCHING SEP 1ST, 2024 →
          </HighlightedText>
          <Typography variant="h2" component="h1" sx={{ color: 'white', mb: 2, mt: 2, fontWeight: 700, fontSize: '48px', lineHeight: 1.2, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Curate Your Digital Experience.
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 4, fontSize: '18px' }}>
            Sign up for the waitlist and be the first to curate content from various sources.
          </Typography>
          <StyledButton
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            size="large"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <RollingTextContainer>
              <RollingText isHovered={isHovered}>
                <span>Join Waitlist</span>
                <span>Join Now</span>
              </RollingText>
            </RollingTextContainer>
          </StyledButton>
        </GlassCard>
      </GlassCardWrapper>
    </ContentContainer>
  );
}

export default HomePage;
