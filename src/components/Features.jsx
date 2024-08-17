import React from 'react';
import { Box, Typography, Container, styled, Stack, useMediaQuery, useTheme } from '@mui/material';
import WobbleCard from './UI/WobbleCard.jsx';
import Feature1 from './Features/Feature1.jsx';
import Feature2 from './Features/Feature2.jsx';
import Feature4 from './Features/Feature4.jsx';

const FeaturesSection = styled(Box)(({ theme }) => ({
  padding: '64px 0',
  background: 'transparent',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    padding: '32px 0',
  },
}));

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <FeaturesSection>
      <Container maxWidth="lg" >
        <Typography variant="h3" component="h2" sx={{ 
          color: 'white', 
          mb: 4, 
          textAlign: 'center', 
          fontWeight: 700, 
          fontSize: { xs: '32px', sm: '40px', md: '48px' }, 
          lineHeight: 1.2, 
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}>
          Powerful Features for Content Curation
        </Typography>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          gap={{ xs: 3, md: 5 }}
          mb={{ xs: 3, md: 5 }}
        >
          <Box sx={{ 
            height: { xs: '300px', sm: '350px', md: '400px' }, 
            width: { xs: '100%', md: '120%' }, 
            marginLeft: '0',
            zIndex: '2'
          }}>
            <WobbleCard className={`p-4 ${isMobile ? '' : 'sm:p-10'}`}>
              <Feature1 />
            </WobbleCard>
          </Box>
          <Box sx={{ 
            height: { xs: '300px', sm: '350px', md: '400px' }, 
            width: { xs: '100%', md: '80%' }, 
            marginLeft: { xs: '0', md: 'auto' },
            zIndex: '1'
          }}>
            <WobbleCard className={`p-4 ${isMobile ? '' : 'sm:p-10'}`}>
              <Feature2 />
            </WobbleCard>
          </Box>
        </Stack>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          gap={{ xs: 3, md: 5 }}
        >
          <Box sx={{ 
            height: { xs: '300px', sm: '350px', md: '400px' }, 
            width: { xs: '100%', md: '80%' }, 
            zIndex: '2',
            marginLeft: 0,
          }}>
            <WobbleCard className={`p-4 ${isMobile ? '' : 'sm:p-10'}`}>
              <Feature2 />
            </WobbleCard>
          </Box>
          <Box sx={{ 
            height: { xs: '300px', sm: '350px', md: '400px' }, 
            width: { xs: '100%', md: '120%' }, 
            zIndex: '2',
            marginLeft: { xs: '0', md: 'auto' }
          }}>
            <WobbleCard className={`p-4 ${isMobile ? '' : 'sm:p-10'}`}>
              <Feature4 />
            </WobbleCard>
          </Box>
        </Stack>
      </Container>
    </FeaturesSection>
  );
};

export default Features;