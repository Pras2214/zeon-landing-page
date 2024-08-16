import React from 'react';
import { Box, Grid, Typography, Container, styled } from '@mui/material';
import WobbleCard from './UI/WobbleCard.jsx';
import Feature2 from './Features/Feature2.jsx';
import Feature3 from './Features/Feature3.jsx';
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <Box sx={{ 
              position: 'relative', 
              height: '400px', 
              width: '120%', 
              marginLeft: '0',
              zIndex: '2'
            }}>
              <WobbleCard className="p-4 sm:p-10">
                <Typography variant="h5" sx={{ 
                  color: 'white', 
                  mb: 2, 
                  fontWeight: 600, 
                  fontSize: '24px',
                }}>
                  Feature 1
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '16px',
                  lineHeight: 1.6,
                }}>
                  Description of Feature. Add more details about the feature here.
                </Typography>
              </WobbleCard>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <Box sx={{ 
              position: 'relative', 
              height: '400px', 
              width: '80%', 
              marginLeft: 'auto',
              zIndex: '1'
            }}>
              <WobbleCard className="p-4 sm:p-10">
                {/* <Typography variant="h5" sx={{ 
                  color: 'white', 
                  mb: 2, 
                  fontWeight: 600, 
                  fontSize: '24px',
                }}>
                  Feature 2
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '16px',
                  lineHeight: 1.6,
                }}>
                  Description of Feature. Add more details about the feature here.
                </Typography> */}
                <Feature2 />
              </WobbleCard>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <Box sx={{ 
              position: 'relative', 
              height: '400px', 
              width: '80%', 
              marginLeft: '0',
              zIndex: '2'
            }}>
              <WobbleCard className="p-4 sm:p-10">
                {/* <Typography variant="h5" sx={{ 
                  color: 'white', 
                  mb: 2, 
                  fontWeight: 600, 
                  fontSize: '24px',
                }}>
                  Feature 3
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '16px',
                  lineHeight: 1.6,
                }}>
                  Description of Feature. Add more details about the feature here.
                </Typography> */}
                <Feature3 />
              </WobbleCard>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
            <Box sx={{ 
              position: 'relative', 
              height: '400px', 
              width: '120%', 
              marginLeft: '-20%',
              zIndex: '2'
            }}>
              <WobbleCard className="p-4 sm:p-10">
                {/* <Typography variant="h5" sx={{ 
                  color: 'white', 
                  mb: 2, 
                  fontWeight: 600, 
                  fontSize: '24px',
                }}>
                  Feature 4
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  fontSize: '16px',
                  lineHeight: 1.6,
                }}>
                  Description of Feature. Add more details about the feature here.
                </Typography> */}
                <Feature4 />
              </WobbleCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;