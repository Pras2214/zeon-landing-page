import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, styled } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'rgba(10, 10, 30, 0.8)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(99, 102, 241, 0.3)',
  padding: theme.spacing(6, 0),
  color: 'rgba(255, 255, 255, 0.8)',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#6366f1',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  transition: 'color 0.3s ease, transform 0.3s ease',
  '&:hover': {
    color: '#6366f1',
    transform: 'scale(1.1)',
  },
}));

function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Zeon.
            </Typography>
            <Typography variant="body2">
              Curate your digital experience with Zeon. Join us in shaping the future of content curation.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <FooterLink onClick={() => scrollToSection('home')}>Home</FooterLink>
            </Box>
            <Box>
              <FooterLink onClick={() => scrollToSection('use-cases')}>Use Cases</FooterLink>
            </Box>
            <Box>
              <FooterLink onClick={() => scrollToSection('features')}>Features</FooterLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <SocialIcon aria-label="X (formerly Twitter)" href="https://x.com/teziapp?s=21&t=asJfqrouLwSDFJa1W_55zw" target="_blank" rel="noopener noreferrer">
                <XIcon />
              </SocialIcon>
              <SocialIcon aria-label="LinkedIn" href="https://www.linkedin.com/company/teziapp/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon aria-label="GitHub" href="https://github.com/teziapp" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Zeon. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
}

export default Footer;