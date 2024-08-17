import React, { useState, useCallback, useRef, useEffect } from 'react';
import { styled, Box, Container, Button, Typography, TextField } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const CTASection = styled(Box)({
  padding: '70px 0 120px',
  background: 'transparent',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const GlassCard = styled(Box)({
  background: 'rgba(28,28,39,0.8)',
  borderRadius: '24px',
  padding: '64px',
  width: '100%',
  maxWidth: '800px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(8px)',
  textAlign: 'left',
  paddingBottom: '48px'
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

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    color: 'white',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '28px',
    padding: '4px 16px',
    transition: 'all 0.3s ease-in-out',
    border: '1px solid rgba(99, 102, 241, 0)',
    '&:hover, &.Mui-focused': {
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(99, 102, 241, 1)',
      boxShadow: '0 0 15px rgba(99, 102, 241, 0.4)',
    },
  },
  '& .MuiInputBase-input': {
    padding: '12px 0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255, 255, 255, 0)',
    transition: 'border-color 0.3s ease-in-out',
  },
  '&:hover .MuiOutlinedInput-notchedOutline' : {
    border: '1px solid rgba(99, 102, 241, 1)'
  },
  '&:hover .MuiOutlinedInput-notchedOutline, & .Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(99, 102, 241, 1)',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    marginLeft: '10px'
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
    fontSize: 'large',
    top: '-6%',
    marginLeft:'0'
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(16px, -6px) scale(0.75)',
    color: '#6366f1',
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

const ThankYouMessage = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  opacity: 0,
  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
  '&.visible': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)',
  },
  '&.hidden': {
    opacity: 0,
    transform: 'translate(-50%, -50%) scale(0.9)',
  },
}));

function CTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const buttonRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    if (isSubmitted) {
      setShowThankYou(true);
      const timer = setTimeout(() => {
        setShowThankYou(false);
        setTimeout(() => setIsSubmitted(false), 500); // Delay resetting isSubmitted to allow for fade-out animation
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <CTASection id="cta">
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GlassCard>
          <Box sx={{ display: 'flex', flexDirection: 'column', mb: 3 }}>
            <Typography variant="h2" component="h2" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.2, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              Discover What Matters, Skip the Noise
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 5, fontWeight: 400, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
            Join our waitlist and be the first to experience the future of content curation.
          </Typography>
          <Box sx={{ position: 'relative', minHeight: '80px'}}>
            <ThankYouMessage className={showThankYou ? 'visible' : 'hidden'}>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'lighter' }}>
                Thank you for joining the waitlist!
              </Typography>
            </ThankYouMessage>
            {!isSubmitted && (
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'flex-start', alignItems:'center' }}>
                <StyledTextField
                  label="Enter your email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  sx={{ maxWidth: '400px' }}
                />
                <RollingButton
                  ref={buttonRef}
                  variant="contained"
                  size="large"
                  onClick={async () => {
                    try {
                        const r = await fetch('https://email.mohitpatel.life/joinwaitlist/zeon', {
                            method: 'POST',
                            body: JSON.stringify({
                                name: 'Mohit',
                                recipients: email,
                                subject: 'Zeon',
                                intro: 'Welcome to Zeon!',
                                password: 'stickitup',
                            }),
                            headers: {
                              'Content-Type': 'application/json',
                            },
                        });

                        const res = await r.json();

                        if (res.success) {
                            setEmail(''); // Clear the email field
                            setIsSubmitted(true); // Show thank you message
                        } else {
                            throw new Error();
                        }
                    } catch (e) {
                        console.log(e)
                        alert('Email failed');
                    }
                }}
                >
                  Join Waitlist
                </RollingButton>
              </Box>
            )}
          </Box>
        </GlassCard>
      </Container>
    </CTASection>
  );
}

export default CTA;