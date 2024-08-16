import React from 'react';
import { Box, Grid, Typography, Container, styled, Stack } from '@mui/material';
import WobbleCard from './UI/WobbleCard.jsx';
import Feature1 from './Features/Feature1.jsx';
import Feature2 from './Features/Feature2.jsx';
import Feature4 from './Features/Feature4.jsx';

const FeaturesSection = styled(Box)({
  padding: '64px 0',
  background: 'transparent',
  position: 'relative',
  zIndex: 1,
});

const Features = () => {
  return (
    <FeaturesSection>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ 
          color: 'white', 
          mb: 4, 
          textAlign: 'center', 
          fontWeight: 700, 
          fontSize: '48px', 
          lineHeight: 1.2, 
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          fontFamily: '"Playfair Display", serif',
        }}>
          Powerful Features for Content Curation
        </Typography>
        <Stack direction='row' gap='5'>
            <Box sx={{ 
              height: '400px', 
              width: '120%', 
              marginLeft: '0',
              zIndex: '2'
            }}>
              <WobbleCard className="p-4 sm:p-10">
                <Feature1 />
              </WobbleCard>
            </Box>
            <Box sx={{ 
              height: '400px', 
              width: '80%', 
              marginLeft: 'auto',
              zIndex: '1'
            }}>
              <WobbleCard className="p-4 sm:p-10">
                <Feature2 />
              </WobbleCard>
            </Box>
        </Stack>
        <Stack direction='row' gap='5'>
            <Box sx={{ 
              height: '400px', 
              width: '80%', 
              zIndex: '2',
              marginLeft:0,
            }}>
              <WobbleCard className="p-4 sm:p-10">
                <Feature2 />
              </WobbleCard>
            </Box>
            <Box sx={{ 
              height: '400px', 
              width: '120%', 
              zIndex: '2',
              marginLeft: 'auto'
            }}>
              <WobbleCard className="p-4 sm:p-10">
                <Feature4 />
              </WobbleCard>
            </Box>
        </Stack>

      </Container>
    </FeaturesSection>
  );
};

export default Features;